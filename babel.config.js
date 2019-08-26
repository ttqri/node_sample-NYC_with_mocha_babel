module.exports = (api) => {
  api.cache(true);

  const { NODE_ENV, BABEL_ENV, NYC_ROOT_ID } = process.env;

  console.log(NODE_ENV, BABEL_ENV, NYC_ROOT_ID);

  if ( NODE_ENV && BABEL_ENV && NODE_ENV !== BABEL_ENV ) {
    console.warn( `WARNING: Both BABEL_ENV and NODE_ENV are set in` );
    console.warn( `WARNING: the environment, but with different values.` );
    console.warn( `WARNING: BABEL_ENV = ${BABEL_ENV}` );
    console.warn( `WARNING: NODE_ENV = ${NODE_ENV}` );
  }

  const isCoverage = ( NODE_ENV === 'test' || BABEL_ENV === 'test' || NYC_ROOT_ID );

  return {
    "presets": [
      "@babel/preset-env"
    ],
    "env": {
      "test": {
        "plugins": [ "istanbul" ]
      }
    }
  };
};
