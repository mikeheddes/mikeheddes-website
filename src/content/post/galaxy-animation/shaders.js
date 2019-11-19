export const vertexShader = `
attribute vec4 star;
attribute float angularVelocity;
uniform float time;
uniform bool isNightTheme;
// varying float alpha;

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

  return vec3(x,y,z);
}

void main() {
  vec3 myPosition = getPosition(star, angularVelocity * time);
  vec4 mvPosition = modelViewMatrix * vec4( myPosition, 1.0 );

  if (isNightTheme) {
    gl_PointSize = ( 30.0 / - mvPosition.z ) + 1.5;
  } else {
    gl_PointSize = ( 55.0 / - mvPosition.z ) + 2.0;
  }

  gl_Position = projectionMatrix * mvPosition;

  // float r = (star[0] - 2.0) / 30.0;
  // alpha = pow(r, 0.1) / (1.0 + 0.1 * exp(-myPosition.z * 2.0));
}`

export const fragmentShader = `
uniform vec3 starColor;
// varying float alpha;

void main() {
  // makes the points round
  float cr = length( gl_PointCoord - vec2( 0.5, 0.5 ) ) / 0.475;
  if (cr > 1.0) discard;

  // gl_FragColor = vec4( starColor, 0.9 * alpha );
  gl_FragColor = vec4( starColor, 0.6 );
}`
