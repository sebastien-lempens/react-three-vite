uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec2 uv = vUv;
    vec3 color = vec3(0.0, 0.0, 0.0);
    color += vNormal;
    gl_FragColor.rgba = vec4(color, sin(uTime) * 0.5 + 0.5);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}