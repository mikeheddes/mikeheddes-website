export const vertexShader = `
attribute vec4 star;
attribute float angularVelocity;
attribute float starIndex;
uniform float time;
uniform float pixelRatio;
varying float alpha;
varying float isSol;

vec3 getPosition(vec4 starIn, float nt) {
  float comega = cos(starIn[2]);
  float cnti = cos(nt + starIn[3]);
  float somega = sin(starIn[2]);
  float snti = sin(nt + starIn[3]);
  float ci = cos(starIn[1]);
  float si = sin(starIn[1]);

  float x = starIn[0] * (cnti * comega - snti * ci * somega);
  float y = starIn[0] * (cnti * somega + snti * ci * comega);
  float z = starIn[0] * (snti * si);

  return vec3(x, y, z);
}

void main() {
  vec3 myPosition = getPosition(star, angularVelocity * time);
  vec4 mvPosition = modelViewMatrix * vec4( myPosition, 1.0 );

  float fog = 1. / max( 1., - mvPosition.z );
  gl_PointSize = 1. + 20. * fog;

  // Correct scale to monitor pixel ratio
  gl_PointSize = gl_PointSize * pixelRatio;

  alpha = min(.8, fog * 13.);

  isSol = float(starIndex == 0.);

  if (starIndex == 0.) {
    gl_PointSize = gl_PointSize * 3.;
  }

  gl_Position = projectionMatrix * mvPosition;
}`;

export const fragmentShader = `
varying float alpha;
varying float isSol;

void main() {
  // makes the points round
  float cr = length( gl_PointCoord - vec2( 0.5, 0.5 ) ) / 0.5;
  if (cr > 1.0) discard;

  if (isSol == 1.) {
    gl_FragColor = vec4( 1.0, 0.933, 0.4, 1.0 );
  } else {
    gl_FragColor = vec4( 1.0, 1.0, 1.0, alpha );
  }
}`;
