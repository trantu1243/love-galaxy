import * as _0x275f13 from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "three/examples/jsm/loaders/FontLoader.js";
import "three/examples/jsm/geometries/TextGeometry.js";
const scene = new _0x275f13.Scene();
scene.fog = new _0x275f13.FogExp2(0x0, 0.0015);
const camera = new _0x275f13.PerspectiveCamera(
    0x4b,
    window.innerWidth / window.innerHeight,
    0.1,
    0x186a0
);
camera.position.set(0x0, 0x14, 0x1e);
const renderer = new _0x275f13.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0x2));
renderer.outputColorSpace = _0x275f13.SRGBColorSpace;
document.getElementById("container").appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.2;
controls.enabled = false;
controls.target.set(0x0, 0x0, 0x0);
controls.enablePan = false;
controls.minDistance = 0xf;
controls.maxDistance = 0x12c;
controls.zoomSpeed = 0.3;
controls.rotateSpeed = 0.3;
controls.update();
function createGlowMaterial(_0x2f8802, _0x44755c = 0x80, _0x35d7c7 = 0.55) {
    const _0x4d576a = document.createElement("canvas");
    _0x4d576a.width = _0x4d576a.height = _0x44755c;
    const _0x1f56ab = _0x4d576a.getContext("2d");
    const _0x285973 = _0x1f56ab.createRadialGradient(
        _0x44755c / 0x2,
        _0x44755c / 0x2,
        0x0,
        _0x44755c / 0x2,
        _0x44755c / 0x2,
        _0x44755c / 0x2
    );
    _0x285973.addColorStop(0x0, _0x2f8802);
    _0x285973.addColorStop(0x1, "rgba(0,0,0,0)");
    _0x1f56ab.fillStyle = _0x285973;
    _0x1f56ab.fillRect(0x0, 0x0, _0x44755c, _0x44755c);
    const _0x386cb5 = new _0x275f13.CanvasTexture(_0x4d576a);
    const _0x17be30 = new _0x275f13.SpriteMaterial({
        map: _0x386cb5,
        transparent: true,
        opacity: _0x35d7c7,
        depthWrite: false,
        blending: _0x275f13.AdditiveBlending,
    });
    return new _0x275f13.Sprite(_0x17be30);
}
const centralGlow = createGlowMaterial("rgba(255,255,255,0.8)", 0x9c, 0.25);
centralGlow.scale.set(0x8, 0x8, 0x1);
scene.add(centralGlow);
for (let i = 0x0; i < 0xf; i++) {
    const hue = Math.random() * 0x168;
    const color = "hsla(" + hue + ", 80%, 50%, 0.6)";
    const nebula = createGlowMaterial(color, 0x100);
    nebula.scale.set(0x64, 0x64, 0x1);
    nebula.position.set(
        (Math.random() - 0.5) * 0xaf,
        (Math.random() - 0.5) * 0xaf,
        (Math.random() - 0.5) * 0xaf
    );
    scene.add(nebula);
}
const galaxyParameters = {
    count: 0x186a0,
    arms: 0x6,
    radius: 0x64,
    spin: 0.5,
    randomness: 0.2,
    randomnessPower: 0x14,
    insideColor: new _0x275f13.Color(0xd63ed6),
    outsideColor: new _0x275f13.Color(0x48b8b8),
};
function getHeartImagesFromURL() {
    const _0x3a40c1 = new URLSearchParams(window.location.search);
    const _0x6fb5a7 = _0x3a40c1.get("images");
    if (_0x6fb5a7) {
        const _0x4279fd = decodeURIComponent(_0x6fb5a7);
        const _0x21433b = _0x4279fd
            .split(",")
            .map((_0x41cf75) => _0x41cf75.trim())
            .filter(Boolean);
        return _0x21433b;
    }
    return null;
}
const heartImages = [
    "./images/1.jpeg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",
    "./images/18.jpg",
    "./images/19.png",
];

const numGroups = heartImages.length;
let pointsPerGroup;
if (numGroups <= 0x1) {
    pointsPerGroup = 0x3a98;
} else {
    if (numGroups >= 0x6) {
        pointsPerGroup = 0xfa0;
    } else {
        const t = (numGroups - 0x1) / 5;
        pointsPerGroup = Math.floor(0x3a98 * (0x1 - t) + 0xfa0 * t);
    }
}
if (pointsPerGroup * numGroups > 0x186a0) {
    pointsPerGroup = Math.floor(0x186a0 / numGroups);
}
console.log("Số lượng ảnh: " + numGroups + ", Điểm mỗi ảnh: " + pointsPerGroup);
const positions = new Float32Array(300000);
const colors = new Float32Array(300000);
let pointIdx = 0x0;
for (let i = 0x0; i < 0x186a0; i++) {
    const radius = Math.pow(Math.random(), 0x14) * 0x64;
    const branchAngle = ((i % 0x6) / 0x6) * Math.PI * 0x2;
    const spinAngle = radius * 0.5;
    const randomX = (Math.random() - 0.5) * 0.2 * radius;
    const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
    const randomZ = (Math.random() - 0.5) * 0.2 * radius;
    const totalAngle = branchAngle + spinAngle;
    if (radius < 0x1e && Math.random() < 0.7) {
        continue;
    }
    const i3 = pointIdx * 0x3;
    positions[i3] = Math.cos(totalAngle) * radius + randomX;
    positions[i3 + 0x1] = randomY;
    positions[i3 + 0x2] = Math.sin(totalAngle) * radius + randomZ;
    const mixedColor = new _0x275f13.Color(0xff66ff);
    mixedColor.lerp(new _0x275f13.Color(0x66ffff), radius / 0x64);
    mixedColor.multiplyScalar(0.7 + 0.3 * Math.random());
    colors[i3] = mixedColor.r;
    colors[i3 + 0x1] = mixedColor.g;
    colors[i3 + 0x2] = mixedColor.b;
    pointIdx++;
}
const galaxyGeometry = new _0x275f13.BufferGeometry();
galaxyGeometry.setAttribute(
    "position",
    new _0x275f13.BufferAttribute(positions.slice(0x0, pointIdx * 0x3), 0x3)
);
galaxyGeometry.setAttribute(
    "color",
    new _0x275f13.BufferAttribute(colors.slice(0x0, pointIdx * 0x3), 0x3)
);
const galaxyMaterial = new _0x275f13.ShaderMaterial({
    uniforms: {
        uTime: {
            value: 0x0,
        },
        uSize: {
            value: 0x32 * renderer.getPixelRatio(),
        },
        uRippleTime: {
            value: -0x1,
        },
        uRippleSpeed: {
            value: 0x28,
        },
        uRippleWidth: {
            value: 0x14,
        },
    },
    vertexShader:
        "\n        uniform float uSize;\n        uniform float uTime;\n        uniform float uRippleTime;\n        uniform float uRippleSpeed;\n        uniform float uRippleWidth;\n\n        varying vec3 vColor;\n\n        void main() {\n            // Lấy màu gốc từ geometry (giống hệt vertexColors: true)\n            vColor = color;\n\n            vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n            // ---- LOGIC HIỆU ỨNG GỢN SÓNG ----\n            if (uRippleTime > 0.0) {\n                float rippleRadius = (uTime - uRippleTime) * uRippleSpeed;\n                float particleDist = length(modelPosition.xyz);\n\n                float strength = 1.0 - smoothstep(rippleRadius - uRippleWidth, rippleRadius + uRippleWidth, particleDist);\n                strength *= smoothstep(rippleRadius + uRippleWidth, rippleRadius - uRippleWidth, particleDist);\n\n                if (strength > 0.0) {\n                    vColor += vec3(strength * 2.0); // Làm màu sáng hơn khi sóng đi qua\n                }\n            }\n\n            vec4 viewPosition = viewMatrix * modelPosition;\n            gl_Position = projectionMatrix * viewPosition;\n            // Dòng này làm cho các hạt nhỏ hơn khi ở xa, mô phỏng hành vi của PointsMaterial\n            gl_PointSize = uSize / -viewPosition.z;\n        }\n    ",
    fragmentShader:
        "\n        varying vec3 vColor;\n        void main() {\n            // Làm cho các hạt có hình tròn thay vì hình vuông\n            float dist = length(gl_PointCoord - vec2(0.5));\n            if (dist > 0.5) discard;\n\n            gl_FragColor = vec4(vColor, 1.0);\n        }\n    ",
    blending: _0x275f13.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: true,
});
const galaxy = new _0x275f13.Points(galaxyGeometry, galaxyMaterial);
scene.add(galaxy);
function createNeonTexture(_0x3b740a, _0x1718cd) {
    const _0x2bbbbf = window.devicePixelRatio || 0x1;
    const _0x408cbe = document.createElement("canvas");
    _0x408cbe.width = _0x408cbe.height = _0x1718cd * _0x2bbbbf;
    _0x408cbe.style.width = _0x408cbe.style.height = _0x1718cd + "px";
    const _0x4560d7 = _0x408cbe.getContext("2d");
    _0x4560d7.scale(_0x2bbbbf, _0x2bbbbf);
    const _0x1342c3 = _0x3b740a.width / _0x3b740a.height;
    let _0xf6e159;
    let _0x1681fc;
    let _0x1fa424;
    let _0x781b82;
    if (_0x1342c3 > 0x1) {
        _0xf6e159 = _0x1718cd;
        _0x1681fc = _0x1718cd / _0x1342c3;
        _0x1fa424 = 0x0;
        _0x781b82 = (_0x1718cd - _0x1681fc) / 0x2;
    } else {
        _0x1681fc = _0x1718cd;
        _0xf6e159 = _0x1718cd * _0x1342c3;
        _0x1fa424 = (_0x1718cd - _0xf6e159) / 0x2;
        _0x781b82 = 0x0;
    }
    _0x4560d7.clearRect(0x0, 0x0, _0x1718cd, _0x1718cd);
    const _0x10195c = _0x1718cd * 0.1;
    _0x4560d7.save();
    _0x4560d7.beginPath();
    _0x4560d7.moveTo(_0x1fa424 + _0x10195c, _0x781b82);
    _0x4560d7.lineTo(_0x1fa424 + _0xf6e159 - _0x10195c, _0x781b82);
    _0x4560d7.arcTo(
        _0x1fa424 + _0xf6e159,
        _0x781b82,
        _0x1fa424 + _0xf6e159,
        _0x781b82 + _0x10195c,
        _0x10195c
    );
    _0x4560d7.lineTo(_0x1fa424 + _0xf6e159, _0x781b82 + _0x1681fc - _0x10195c);
    _0x4560d7.arcTo(
        _0x1fa424 + _0xf6e159,
        _0x781b82 + _0x1681fc,
        _0x1fa424 + _0xf6e159 - _0x10195c,
        _0x781b82 + _0x1681fc,
        _0x10195c
    );
    _0x4560d7.lineTo(_0x1fa424 + _0x10195c, _0x781b82 + _0x1681fc);
    _0x4560d7.arcTo(
        _0x1fa424,
        _0x781b82 + _0x1681fc,
        _0x1fa424,
        _0x781b82 + _0x1681fc - _0x10195c,
        _0x10195c
    );
    _0x4560d7.lineTo(_0x1fa424, _0x781b82 + _0x10195c);
    _0x4560d7.arcTo(
        _0x1fa424,
        _0x781b82,
        _0x1fa424 + _0x10195c,
        _0x781b82,
        _0x10195c
    );
    _0x4560d7.closePath();
    _0x4560d7.clip();
    _0x4560d7.drawImage(_0x3b740a, _0x1fa424, _0x781b82, _0xf6e159, _0x1681fc);
    _0x4560d7.restore();
    const _0x1d24af = new _0x275f13.CanvasTexture(_0x408cbe);
    _0x1d24af.minFilter = _0x275f13.LinearFilter;
    _0x1d24af.magFilter = _0x275f13.LinearFilter;
    _0x1d24af.anisotropy = renderer.capabilities.getMaxAnisotropy();
    _0x1d24af.colorSpace = _0x275f13.SRGBColorSpace;
    return _0x1d24af;
}
for (let group = 0x0; group < numGroups; group++) {
    const groupPositions = new Float32Array(pointsPerGroup * 0x3);
    const groupColorsNear = new Float32Array(pointsPerGroup * 0x3);
    const groupColorsFar = new Float32Array(pointsPerGroup * 0x3);
    let validPointCount = 0x0;
    for (let i = 0x0; i < pointsPerGroup; i++) {
        const idx = validPointCount * 0x3;
        const globalIdx = group * pointsPerGroup + i;
        const radius = Math.pow(Math.random(), 0x14) * 0x64;
        if (radius < 0x1e) {
            continue;
        }
        const branchAngle = ((globalIdx % 0x6) / 0x6) * Math.PI * 0x2;
        const spinAngle = radius * 0.5;
        const randomX = (Math.random() - 0.5) * 0.2 * radius;
        const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
        const randomZ = (Math.random() - 0.5) * 0.2 * radius;
        const totalAngle = branchAngle + spinAngle;
        groupPositions[idx] = Math.cos(totalAngle) * radius + randomX;
        groupPositions[idx + 0x1] = randomY;
        groupPositions[idx + 0x2] = Math.sin(totalAngle) * radius + randomZ;
        const colorNear = new _0x275f13.Color(0xffffff);
        groupColorsNear[idx] = colorNear.r;
        groupColorsNear[idx + 0x1] = colorNear.g;
        groupColorsNear[idx + 0x2] = colorNear.b;
        const colorFar = galaxyParameters.insideColor.clone();
        colorFar.lerp(galaxyParameters.outsideColor, radius / 0x64);
        colorFar.multiplyScalar(0.7 + 0.3 * Math.random());
        groupColorsFar[idx] = colorFar.r;
        groupColorsFar[idx + 0x1] = colorFar.g;
        groupColorsFar[idx + 0x2] = colorFar.b;
        validPointCount++;
    }
    if (validPointCount === 0x0) {
        continue;
    }
    const groupGeometryNear = new _0x275f13.BufferGeometry();
    groupGeometryNear.setAttribute(
        "position",
        new _0x275f13.BufferAttribute(
            groupPositions.slice(0x0, validPointCount * 0x3),
            0x3
        )
    );
    groupGeometryNear.setAttribute(
        "color",
        new _0x275f13.BufferAttribute(
            groupColorsNear.slice(0x0, validPointCount * 0x3),
            0x3
        )
    );
    const groupGeometryFar = new _0x275f13.BufferGeometry();
    groupGeometryFar.setAttribute(
        "position",
        new _0x275f13.BufferAttribute(
            groupPositions.slice(0x0, validPointCount * 0x3),
            0x3
        )
    );
    groupGeometryFar.setAttribute(
        "color",
        new _0x275f13.BufferAttribute(
            groupColorsFar.slice(0x0, validPointCount * 0x3),
            0x3
        )
    );
    const posAttr = groupGeometryFar.getAttribute("position");
    let cx = 0x0;
    let cy = 0x0;
    let cz = 0x0;
    for (let i = 0x0; i < posAttr.count; i++) {
        cx += posAttr.getX(i);
        cy += posAttr.getY(i);
        cz += posAttr.getZ(i);
    }
    cx /= posAttr.count;
    cy /= posAttr.count;
    cz /= posAttr.count;
    groupGeometryNear.translate(-cx, -cy, -cz);
    groupGeometryFar.translate(-cx, -cy, -cz);
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = heartImages[group];
    img.onload = () => {
        const _0x40c84a = createNeonTexture(img, 0x100);
        const _0x5cff9c = new _0x275f13.PointsMaterial({
            size: 1.8,
            map: _0x40c84a,
            transparent: false,
            alphaTest: 0.2,
            depthWrite: true,
            depthTest: true,
            blending: _0x275f13.NormalBlending,
            vertexColors: true,
        });
        const _0x5e01cf = new _0x275f13.PointsMaterial({
            size: 1.8,
            map: _0x40c84a,
            transparent: true,
            alphaTest: 0.2,
            depthWrite: false,
            blending: _0x275f13.AdditiveBlending,
            vertexColors: true,
        });
        const _0x21c257 = new _0x275f13.Points(groupGeometryFar, _0x5e01cf);
        _0x21c257.position.set(cx, cy, cz);
        _0x21c257.userData.materialNear = _0x5cff9c;
        _0x21c257.userData.geometryNear = groupGeometryNear;
        _0x21c257.userData.materialFar = _0x5e01cf;
        _0x21c257.userData.geometryFar = groupGeometryFar;
        scene.add(_0x21c257);
    };
}
const ambientLight = new _0x275f13.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const starGeometry = new _0x275f13.BufferGeometry();
const starPositions = new Float32Array(60000);
for (let i = 0x0; i < 0x4e20; i++) {
    starPositions[i * 0x3] = (Math.random() - 0.5) * 0x384;
    starPositions[i * 0x3 + 0x1] = (Math.random() - 0.5) * 0x384;
    starPositions[i * 0x3 + 0x2] = (Math.random() - 0.5) * 0x384;
}
starGeometry.setAttribute(
    "position",
    new _0x275f13.BufferAttribute(starPositions, 0x3)
);
const starMaterial = new _0x275f13.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
});
const starField = new _0x275f13.Points(starGeometry, starMaterial);
starField.name = "starfield";
starField.renderOrder = 0x3e7;
scene.add(starField);
let shootingStars = [];
function createShootingStar() {
    const _0x242d95 = new _0x275f13.SphereGeometry(0x2, 0x20, 0x20);
    const _0x638fc = new _0x275f13.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0x0,
        blending: _0x275f13.AdditiveBlending,
    });
    const _0x3455d8 = new _0x275f13.Mesh(_0x242d95, _0x638fc);
    const _0x21295b = new _0x275f13.SphereGeometry(0x3, 0x20, 0x20);
    const _0x388f59 = new _0x275f13.ShaderMaterial({
        uniforms: {
            time: {
                value: 0x0,
            },
        },
        vertexShader:
            "\n            varying vec3 vNormal;\n            void main() {\n                vNormal = normalize(normalMatrix * normal);\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n        ",
        fragmentShader:
            "\n            varying vec3 vNormal;\n            uniform float time;\n            void main() {\n                float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n                gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * (0.8 + sin(time * 5.0) * 0.2));\n            }\n        ",
        transparent: true,
        blending: _0x275f13.AdditiveBlending,
        side: _0x275f13.BackSide,
    });
    const _0x2014cc = new _0x275f13.Mesh(_0x21295b, _0x388f59);
    _0x3455d8.add(_0x2014cc);
    const _0x2223a6 = new _0x275f13.SphereGeometry(10.5, 0x30, 0x30);
    const _0x1bebd7 = new _0x275f13.ShaderMaterial({
        uniforms: {
            glowColor: {
                value: new _0x275f13.Color(0xe0b3ff),
            },
        },
        vertexShader:
            "\n        varying vec3 vNormal;\n        void main() {\n            vNormal = normalize(normalMatrix * normal);\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
        fragmentShader:
            "\n        varying vec3 vNormal;\n        uniform vec3 glowColor;\n        void main() {\n            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n            gl_FragColor = vec4(glowColor, 1.0) * intensity;\n        }\n    ",
        side: _0x275f13.BackSide,
        blending: _0x275f13.AdditiveBlending,
        transparent: true,
    });
    const _0x217dce = new _0x275f13.Mesh(_0x2223a6, _0x1bebd7);
    planet.add(_0x217dce);
    const _0x3875f5 = createRandomCurve();
    const _0x33cdfa = [];
    for (let _0x2e3ab2 = 0x0; _0x2e3ab2 < 0x64; _0x2e3ab2++) {
        const _0x3f6bc3 = _0x2e3ab2 / 99;
        _0x33cdfa.push(_0x3875f5.getPoint(_0x3f6bc3));
    }
    const _0x2d31c0 = new _0x275f13.BufferGeometry().setFromPoints(_0x33cdfa);
    const _0x48001c = new _0x275f13.LineBasicMaterial({
        color: 0x99eaff,
        transparent: true,
        opacity: 0.7,
        linewidth: 0x2,
    });
    const _0x3f9d2c = new _0x275f13.Line(_0x2d31c0, _0x48001c);
    const _0x5b9de2 = new _0x275f13.Group();
    _0x5b9de2.add(_0x3455d8);
    _0x5b9de2.add(_0x3f9d2c);
    _0x5b9de2.userData = {
        curve: _0x3875f5,
        progress: 0x0,
        speed: 0.001 + Math.random() * 0.001,
        life: 0x0,
        maxLife: 0x12c,
        head: _0x3455d8,
        trail: _0x3f9d2c,
        trailLength: 0x64,
        trailPoints: _0x33cdfa,
    };
    scene.add(_0x5b9de2);
    shootingStars.push(_0x5b9de2);
}
function createRandomCurve() {
    const _0x49dd1a = [];
    const _0x66bac8 = new _0x275f13.Vector3(
        -0xc8 + Math.random() * 0x64,
        -0x64 + Math.random() * 0xc8,
        -0x64 + Math.random() * 0xc8
    );
    const _0x3977c3 = new _0x275f13.Vector3(
        0x258 + Math.random() * 0xc8,
        _0x66bac8.y + (-0x64 + Math.random() * 0xc8),
        _0x66bac8.z + (-0x64 + Math.random() * 0xc8)
    );
    const _0x5b831b = new _0x275f13.Vector3(
        _0x66bac8.x + 0xc8 + Math.random() * 0x64,
        _0x66bac8.y + (-0x32 + Math.random() * 0x64),
        _0x66bac8.z + (-0x32 + Math.random() * 0x64)
    );
    const _0x247db0 = new _0x275f13.Vector3(
        _0x3977c3.x - 0xc8 + Math.random() * 0x64,
        _0x3977c3.y + (-0x32 + Math.random() * 0x64),
        _0x3977c3.z + (-0x32 + Math.random() * 0x64)
    );
    _0x49dd1a.push(_0x66bac8, _0x5b831b, _0x247db0, _0x3977c3);
    return new _0x275f13.CubicBezierCurve3(
        _0x66bac8,
        _0x5b831b,
        _0x247db0,
        _0x3977c3
    );
}
function createPlanetTexture(_0x5e2c16 = 0x200) {
    const _0x587670 = document.createElement("canvas");
    _0x587670.width = _0x587670.height = _0x5e2c16;
    const _0xd01be7 = _0x587670.getContext("2d");
    const _0x25c9a2 = _0xd01be7.createRadialGradient(
        _0x5e2c16 / 0x2,
        _0x5e2c16 / 0x2,
        _0x5e2c16 / 0x8,
        _0x5e2c16 / 0x2,
        _0x5e2c16 / 0x2,
        _0x5e2c16 / 0x2
    );
    _0x25c9a2.addColorStop(0x0, "#f8bbd0");
    _0x25c9a2.addColorStop(0.12, "#f48fb1");
    _0x25c9a2.addColorStop(0.22, "#f06292");
    _0x25c9a2.addColorStop(0.35, "#ffffff");
    _0x25c9a2.addColorStop(0.5, "#e1aaff");
    _0x25c9a2.addColorStop(0.62, "#a259f7");
    _0x25c9a2.addColorStop(0.75, "#b2ff59");
    _0x25c9a2.addColorStop(0x1, "#3fd8c7");
    _0xd01be7.fillStyle = _0x25c9a2;
    _0xd01be7.fillRect(0x0, 0x0, _0x5e2c16, _0x5e2c16);
    const _0x52bb06 = [
        "#f8bbd0",
        "#f8bbd0",
        "#f48fb1",
        "#f48fb1",
        "#f06292",
        "#f06292",
        "#ffffff",
        "#e1aaff",
        "#a259f7",
        "#b2ff59",
    ];
    for (let _0x3ea16b = 0x0; _0x3ea16b < 0x28; _0x3ea16b++) {
        const _0x510f64 = Math.random() * _0x5e2c16;
        const _0x1d4a61 = Math.random() * _0x5e2c16;
        const _0x53a8d8 = 0x1e + Math.random() * 0x78;
        const _0x128e7a =
            _0x52bb06[Math.floor(Math.random() * _0x52bb06.length)];
        const _0x421de0 = _0xd01be7.createRadialGradient(
            _0x510f64,
            _0x1d4a61,
            0x0,
            _0x510f64,
            _0x1d4a61,
            _0x53a8d8
        );
        _0x421de0.addColorStop(0x0, _0x128e7a + "cc");
        _0x421de0.addColorStop(0x1, _0x128e7a + "00");
        _0xd01be7.fillStyle = _0x421de0;
        _0xd01be7.fillRect(0x0, 0x0, _0x5e2c16, _0x5e2c16);
    }
    for (let _0x47e4d0 = 0x0; _0x47e4d0 < 0x8; _0x47e4d0++) {
        _0xd01be7.beginPath();
        _0xd01be7.moveTo(Math.random() * _0x5e2c16, Math.random() * _0x5e2c16);
        _0xd01be7.bezierCurveTo(
            Math.random() * _0x5e2c16,
            Math.random() * _0x5e2c16,
            Math.random() * _0x5e2c16,
            Math.random() * _0x5e2c16,
            Math.random() * _0x5e2c16,
            Math.random() * _0x5e2c16
        );
        _0xd01be7.strokeStyle =
            "rgba(180, 120, 200, " + (0.12 + Math.random() * 0.18) + ")";
        _0xd01be7.lineWidth = 0x8 + Math.random() * 0x12;
        _0xd01be7.stroke();
    }
    if (_0xd01be7.filter !== undefined) {
        _0xd01be7.filter = "blur(2px)";
        _0xd01be7.drawImage(_0x587670, 0x0, 0x0);
        _0xd01be7.filter = "none";
    }
    return new _0x275f13.CanvasTexture(_0x587670);
}
const planetGeometry = new _0x275f13.SphereGeometry(0xa, 0x30, 0x30);
const planetTexture = createPlanetTexture();
const planetMaterial = new _0x275f13.ShaderMaterial({
    uniforms: {
        time: {
            value: 0x0,
        },
        baseTexture: {
            value: planetTexture,
        },
    },
    vertexShader:
        "\n        varying vec2 vUv;\n        void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
    fragmentShader:
        "\n        uniform float time;\n        uniform sampler2D baseTexture;\n        varying vec2 vUv;\n        void main() {\n            vec2 uv = vUv;\n            float angle = length(uv - vec2(0.5)) * 3.0;\n            float twist = sin(angle * 3.0 + time) * 0.1;\n            uv.x += twist * sin(time * 0.5);\n            uv.y += twist * cos(time * 0.5);\n            vec4 texColor = texture2D(baseTexture, uv);\n            float noise = sin(uv.x * 10.0 + time) * sin(uv.y * 10.0 + time) * 0.1;\n            texColor.rgb += noise * vec3(0.8, 0.4, 0.2);\n            gl_FragColor = texColor;\n        }\n    ",
});
const planet = new _0x275f13.Mesh(planetGeometry, planetMaterial);
planet.position.set(0x0, 0x0, 0x0);
scene.add(planet);
const ringTexts = [
    "Linhxgnqd",
    ...(window.dataLove2Loveloom && window.dataLove2Loveloom.data.ringTexts
        ? window.dataLove2Loveloom.data.ringTexts
        : []),
];
function createTextRings() {
    const _0x38a806 = ringTexts.length;
    window.textRings = [];
    for (let _0x51465e = 0x0; _0x51465e < _0x38a806; _0x51465e++) {
        const _0x4c3f93 = ringTexts[_0x51465e % ringTexts.length] + "   ";
        const _0x260e22 = 11 + _0x51465e * 0x5;
        function _0x2580ef(_0x2fd8ca) {
            const _0x4b5de8 = _0x2fd8ca.charCodeAt(0x0);
            if (
                (_0x4b5de8 >= 0x4e00 && _0x4b5de8 <= 0x9fff) ||
                (_0x4b5de8 >= 0x3040 && _0x4b5de8 <= 0x309f) ||
                (_0x4b5de8 >= 0x30a0 && _0x4b5de8 <= 0x30ff) ||
                (_0x4b5de8 >= 0xac00 && _0x4b5de8 <= 0xd7af)
            ) {
                return "cjk";
            } else {
                if (_0x4b5de8 >= 0x0 && _0x4b5de8 <= 0x7f) {
                    return "latin";
                }
            }
            return "other";
        }
        let _0x4159be = {
            cjk: 0x0,
            latin: 0x0,
            other: 0x0,
        };
        for (let _0xf0eefa of _0x4c3f93) {
            _0x4159be[_0x2580ef(_0xf0eefa)]++;
        }
        const _0x220424 = _0x4c3f93.length;
        const _0x22e78b = 0x0 / _0x220424;
        let _0x589274 = {
            fontScale: 0.75,
            spacingScale: 1.1,
        };
        if (_0x51465e === 0x0) {
            _0x589274.fontScale = 0.55;
            _0x589274.spacingScale = 0.9;
        } else if (_0x51465e === 0x1) {
            _0x589274.fontScale = 0.65;
            _0x589274.spacingScale = 0x1;
        }
        if (_0x22e78b > 0x0) {
            _0x589274.fontScale *= 0.9;
            _0x589274.spacingScale *= 1.1;
        }
        const _0x57725c = Math.max(0x78, 180);
        const _0x421196 = document.createElement("canvas");
        const _0xd17691 = _0x421196.getContext("2d");
        _0xd17691.font = "bold " + _0x57725c + "px Arial, sans-serif";
        let _0xe04d7e = ringTexts[_0x51465e % ringTexts.length];
        let _0x34b47f = _0xe04d7e + "   ";
        let _0x314c89 = _0xd17691.measureText(_0x34b47f).width;
        let _0x23fecd = 0x2 * Math.PI * _0x260e22 * 0xb4;
        let _0xdf42c3 = Math.ceil(_0x23fecd / _0x314c89);
        let _0x1f5a70 = "";
        for (let _0x1b8731 = 0x0; _0x1b8731 < _0xdf42c3; _0x1b8731++) {
            _0x1f5a70 += _0x34b47f;
        }
        let _0x16f1e7 = _0x314c89 * _0xdf42c3;
        if (_0x16f1e7 < 0x1 || !_0x1f5a70) {
            _0x1f5a70 = _0x34b47f;
            _0x16f1e7 = _0x314c89;
        }
        const _0x4c0841 = document.createElement("canvas");
        _0x4c0841.width = Math.ceil(Math.max(0x1, _0x16f1e7));
        _0x4c0841.height = 0xc8;
        const _0x511494 = _0x4c0841.getContext("2d");
        _0x511494.clearRect(0x0, 0x0, _0x4c0841.width, 0xc8);
        _0x511494.font = "bold " + _0x57725c + "px Arial, sans-serif";
        _0x511494.fillStyle = "white";
        _0x511494.textAlign = "left";
        _0x511494.textBaseline = "alphabetic";
        _0x511494.shadowColor = "#e0b3ff";
        _0x511494.shadowBlur = 0x18;
        _0x511494.lineWidth = 0x6;
        _0x511494.strokeStyle = "#fff";
        _0x511494.strokeText(_0x1f5a70, 0x0, 160);
        _0x511494.shadowColor = "#ffb3de";
        _0x511494.shadowBlur = 0x10;
        _0x511494.fillText(_0x1f5a70, 0x0, 160);
        const _0x44b314 = new _0x275f13.CanvasTexture(_0x4c0841);
        _0x44b314.wrapS = _0x275f13.RepeatWrapping;
        _0x44b314.repeat.x = _0x16f1e7 / _0x23fecd;
        _0x44b314.needsUpdate = true;
        const _0x462adf = new _0x275f13.CylinderGeometry(
            _0x260e22,
            _0x260e22,
            0x1,
            0x80,
            0x1,
            true
        );
        const _0x4efa79 = new _0x275f13.MeshBasicMaterial({
            map: _0x44b314,
            transparent: true,
            side: _0x275f13.DoubleSide,
            alphaTest: 0.01,
        });
        const _0x56b67e = new _0x275f13.Mesh(_0x462adf, _0x4efa79);
        _0x56b67e.position.set(0x0, 0x0, 0x0);
        _0x56b67e.rotation.y = Math.PI / 0x2;
        const _0xd57ff4 = new _0x275f13.Group();
        _0xd57ff4.add(_0x56b67e);
        _0xd57ff4.userData = {
            ringRadius: _0x260e22,
            angleOffset: 0.15 * Math.PI * 0.5,
            speed: 0.008,
            tiltSpeed: 0x0,
            rollSpeed: 0x0,
            pitchSpeed: 0x0,
            tiltAmplitude: Math.PI / 0x3,
            rollAmplitude: Math.PI / 0x6,
            pitchAmplitude: Math.PI / 0x8,
            tiltPhase: Math.PI * 0x2,
            rollPhase: Math.PI * 0x2,
            pitchPhase: Math.PI * 0x2,
            isTextRing: true,
        };
        const _0x901525 = (_0x51465e / _0x38a806) * (Math.PI / 0x1);
        _0xd57ff4.rotation.x = _0x901525;
        scene.add(_0xd57ff4);
        window.textRings.push(_0xd57ff4);
    }
}
createTextRings();
function updateTextRingsRotation() {
    if (!window.textRings || !camera) {
        return;
    }
    window.textRings.forEach((_0x548077, _0x41f326) => {
        _0x548077.children.forEach((_0x4f7dde) => {
            if (_0x4f7dde.userData.initialAngle !== undefined) {
                const _0x5813b4 =
                    _0x4f7dde.userData.initialAngle +
                    _0x548077.userData.angleOffset;
                const _0x2ff092 =
                    Math.cos(_0x5813b4) * _0x4f7dde.userData.ringRadius;
                const _0x95979 =
                    Math.sin(_0x5813b4) * _0x4f7dde.userData.ringRadius;
                _0x4f7dde.position.set(_0x2ff092, 0x0, _0x95979);
                const _0x225801 = new _0x275f13.Vector3();
                _0x4f7dde.getWorldPosition(_0x225801);
                const _0x16b0f9 = new _0x275f13.Vector3()
                    .subVectors(camera.position, _0x225801)
                    .normalize();
                const _0x382737 = Math.atan2(_0x16b0f9.x, _0x16b0f9.z);
                _0x4f7dde.rotation.y = _0x382737;
            }
        });
    });
}
function animatePlanetSystem() {
    if (window.textRings) {
        const _0x3f8519 = Date.now() * 0.001;
        window.textRings.forEach((_0x467a7a, _0x116daa) => {
            const _0x6cbdca = _0x467a7a.userData;
            _0x6cbdca.angleOffset += _0x6cbdca.speed;
            const _0x261d2a =
                Math.sin(
                    _0x3f8519 * _0x6cbdca.tiltSpeed + _0x6cbdca.tiltPhase
                ) * _0x6cbdca.tiltAmplitude;
            const _0x4a1286 =
                Math.cos(
                    _0x3f8519 * _0x6cbdca.rollSpeed + _0x6cbdca.rollPhase
                ) * _0x6cbdca.rollAmplitude;
            const _0x5042d7 =
                Math.sin(
                    _0x3f8519 * _0x6cbdca.pitchSpeed + _0x6cbdca.pitchPhase
                ) * _0x6cbdca.pitchAmplitude;
            _0x467a7a.rotation.x =
                (_0x116daa / window.textRings.length) * (Math.PI / 0x1) +
                _0x261d2a;
            _0x467a7a.rotation.z = _0x4a1286;
            _0x467a7a.rotation.y = _0x6cbdca.angleOffset + _0x5042d7;
            const _0xc7124b =
                Math.sin(
                    _0x3f8519 * (_0x6cbdca.tiltSpeed * 0.7) +
                        _0x6cbdca.tiltPhase
                ) * 0.3;
            _0x467a7a.position.y = _0xc7124b;
            const _0x48c735 =
                (Math.sin(_0x3f8519 * 1.5 + _0x116daa) + 0x1) / 0x2;
            const _0x541a3f = _0x467a7a.children[0x0];
            if (_0x541a3f && _0x541a3f.material) {
                _0x541a3f.material.opacity = 0.7 + _0x48c735 * 0.3;
            }
        });
        updateTextRingsRotation();
    }
}
let fadeOpacity = 0.1;
let fadeInProgress = false;
let hintIcon;
let hintText;
function createHintIcon() {
    hintIcon = new _0x275f13.Group();
    hintIcon.name = "hint-icon-group";
    scene.add(hintIcon);
    const _0x303567 = new _0x275f13.Group();
    const _0x308965 = new _0x275f13.Shape();
    _0x308965.moveTo(0x0, 0x0);
    _0x308965.lineTo(-0.30000000000000004, -1.0499999999999998);
    _0x308965.lineTo(-0.1875, -1.0499999999999998);
    _0x308965.lineTo(-0.375, -1.5);
    _0x308965.lineTo(0.375, -1.5);
    _0x308965.lineTo(0.1875, -1.0499999999999998);
    _0x308965.lineTo(0.30000000000000004, -1.0499999999999998);
    _0x308965.closePath();
    const _0x7ff399 = new _0x275f13.ShapeGeometry(_0x308965);
    const _0x33eb1a = new _0x275f13.MeshBasicMaterial({
        color: 0xffffff,
        side: _0x275f13.DoubleSide,
    });
    const _0x571858 = new _0x275f13.Mesh(_0x7ff399, _0x33eb1a);
    const _0x2583e7 = new _0x275f13.ShapeGeometry(_0x308965);
    const _0x5a3ef9 = new _0x275f13.MeshBasicMaterial({
        color: 0xffffff,
        side: _0x275f13.DoubleSide,
    });
    const _0x44ae6a = new _0x275f13.Mesh(_0x2583e7, _0x5a3ef9);
    _0x44ae6a.scale.set(0.8, 0.8, 0x1);
    _0x44ae6a.position.z = 0.01;
    _0x303567.add(_0x571858, _0x44ae6a);
    _0x303567.position.y = 0.75;
    _0x303567.rotation.x = Math.PI / 0x2;
    const _0x3b72f5 = new _0x275f13.RingGeometry(1.8, 0x2, 0x20);
    const _0x3e90f7 = new _0x275f13.MeshBasicMaterial({
        color: 0xffffff,
        side: _0x275f13.DoubleSide,
        transparent: true,
        opacity: 0.6,
    });
    const _0x613afe = new _0x275f13.Mesh(_0x3b72f5, _0x3e90f7);
    _0x613afe.rotation.x = Math.PI / 0x2;
    hintIcon.userData.ringMesh = _0x613afe;
    hintIcon.add(_0x303567);
    hintIcon.add(_0x613afe);
    hintIcon.position.set(1.5, 1.5, 0xf);
    hintIcon.scale.set(0.8, 0.8, 0.8);
    hintIcon.lookAt(planet.position);
    hintIcon.userData.initialPosition = hintIcon.position.clone();
}
function animateHintIcon(_0x3d26c5) {
    if (!hintIcon) {
        return;
    }
    if (!introStarted) {
        hintIcon.visible = true;
        const _0x20b1bb = Math.sin(_0x3d26c5 * 2.5) * 1.5;
        const _0x4a7662 = new _0x275f13.Vector3();
        hintIcon.getWorldDirection(_0x4a7662);
        hintIcon.position
            .copy(hintIcon.userData.initialPosition)
            .addScaledVector(_0x4a7662, -_0x20b1bb);
        const _0x14872b = hintIcon.userData.ringMesh;
        const _0x14d722 = 0x1 + Math.sin(_0x3d26c5 * 2.5) * 0.1;
        _0x14872b.scale.set(_0x14d722, _0x14d722, 0x1);
        _0x14872b.material.opacity = 0.5 + Math.sin(_0x3d26c5 * 2.5) * 0.2;
        if (hintText) {
            hintText.visible = true;
            hintText.material.opacity = 0.7 + Math.sin(_0x3d26c5 * 0x3) * 0.3;
            hintText.position.y = 0xf + Math.sin(_0x3d26c5 * 0x2) * 0.5;
            hintText.lookAt(camera.position);
        }
    } else {
        if (hintIcon) {
            hintIcon.visible = false;
        }
        if (hintText) {
            hintText.visible = false;
        }
    }
}
function animate() {
    requestAnimationFrame(animate);
    const _0x34a2bc = performance.now() * 0.001;
    animateHintIcon(_0x34a2bc);
    controls.update();
    planet.material.uniforms.time.value = _0x34a2bc * 0.5;
    if (fadeInProgress && fadeOpacity < 0x1) {
        fadeOpacity += 0.025;
        if (fadeOpacity > 0x1) {
            fadeOpacity = 0x1;
        }
    }
    if (!introStarted) {
        fadeOpacity = 0.1;
        scene.traverse((_0xce253c) => {
            if (_0xce253c.name === "starfield") {
                if (
                    _0xce253c.points &&
                    _0xce253c.material.opacity !== undefined
                ) {
                    _0xce253c.material.transparent = false;
                    _0xce253c.material.opacity = 0x1;
                }
                return;
            }
            if (
                _0xce253c.userData.isTextRing ||
                (_0xce253c.parent &&
                    _0xce253c.parent.userData &&
                    _0xce253c.parent.userData.isTextRing)
            ) {
                if (
                    _0xce253c.material &&
                    _0xce253c.material.opacity !== undefined
                ) {
                    _0xce253c.material.transparent = false;
                    _0xce253c.material.opacity = 0x1;
                }
                if (_0xce253c.material && _0xce253c.material.color) {
                    _0xce253c.material.color.set(0xffffff);
                }
            } else if (
                _0xce253c !== planet &&
                _0xce253c !== centralGlow &&
                _0xce253c !== hintIcon &&
                _0xce253c.type !== "Scene" &&
                !_0xce253c.parent.isGroup &&
                _0xce253c.material &&
                _0xce253c.material.opacity !== undefined
            ) {
                _0xce253c.material.transparent = true;
                _0xce253c.material.opacity = 0.1;
            }
        });
        planet.visible = true;
        centralGlow.visible = true;
    } else {
        scene.traverse((_0x23cd39) => {
            if (
                !(
                    _0x23cd39.userData.isTextRing ||
                    (_0x23cd39.parent &&
                        _0x23cd39.parent.userData &&
                        _0x23cd39.parent.userData.isTextRing) ||
                    _0x23cd39 === planet ||
                    _0x23cd39 === centralGlow ||
                    _0x23cd39.type === "Scene"
                )
            ) {
                if (
                    _0x23cd39.material &&
                    _0x23cd39.material.opacity !== undefined
                ) {
                    _0x23cd39.material.transparent = true;
                    _0x23cd39.material.opacity = fadeOpacity;
                }
            } else if (
                _0x23cd39.material &&
                _0x23cd39.material.opacity !== undefined
            ) {
                _0x23cd39.material.opacity = 0x1;
                _0x23cd39.material.transparent = false;
            }
            if (_0x23cd39.material && _0x23cd39.material.color) {
                _0x23cd39.material.color.set(0xffffff);
            }
        });
    }
    for (
        let _0x1cca89 = shootingStars.length - 0x1;
        _0x1cca89 >= 0x0;
        _0x1cca89--
    ) {
        const _0x136677 = shootingStars[_0x1cca89];
        _0x136677.userData.life++;
        let _0x412b7c = 0x1;
        if (_0x136677.userData.life < 0x1e) {
            _0x412b7c = _0x136677.userData.life / 0x1e;
        } else if (
            _0x136677.userData.life >
            _0x136677.userData.maxLife - 0x1e
        ) {
            _0x412b7c =
                (_0x136677.userData.maxLife - _0x136677.userData.life) / 0x1e;
        }
        _0x136677.userData.progress += _0x136677.userData.speed;
        if (_0x136677.userData.progress > 0x1) {
            scene.remove(_0x136677);
            shootingStars.splice(_0x1cca89, 0x1);
            continue;
        }
        const _0x4306ee = _0x136677.userData.curve.getPoint(
            _0x136677.userData.progress
        );
        _0x136677.position.copy(_0x4306ee);
        _0x136677.userData.head.material.opacity = _0x412b7c;
        _0x136677.userData.head.children[0x0].material.uniforms.time.value =
            _0x34a2bc;
        const _0x3a61c7 = _0x136677.userData.trail;
        const _0x257f32 = _0x136677.userData.trailPoints;
        _0x257f32[0x0].copy(_0x4306ee);
        for (
            let _0xe13cdc = 0x1;
            _0xe13cdc < _0x136677.userData.trailLength;
            _0xe13cdc++
        ) {
            const _0x386ece = Math.max(
                0x0,
                _0x136677.userData.progress - _0xe13cdc * 0.01
            );
            _0x257f32[_0xe13cdc].copy(
                _0x136677.userData.curve.getPoint(_0x386ece)
            );
        }
        _0x3a61c7.geometry.setFromPoints(_0x257f32);
        _0x3a61c7.material.opacity = _0x412b7c * 0.7;
    }
    if (shootingStars.length < 0x3 && Math.random() < 0.02) {
        createShootingStar();
    }
    scene.traverse((_0x279c1e) => {
        if (
            _0x279c1e.isPoints &&
            _0x279c1e.userData.materialNear &&
            _0x279c1e.userData.materialFar
        ) {
            const _0x49b28e = _0x279c1e.geometry.getAttribute("position");
            let _0x466d44 = false;
            for (
                let _0x48fc55 = 0x0;
                _0x48fc55 < _0x49b28e.count;
                _0x48fc55++
            ) {
                const _0x45e6f1 =
                    _0x49b28e.getX(_0x48fc55) + _0x279c1e.position.x;
                const _0x53568f =
                    _0x49b28e.getY(_0x48fc55) + _0x279c1e.position.y;
                const _0x30a895 =
                    _0x49b28e.getZ(_0x48fc55) + _0x279c1e.position.z;
                const _0x4dd6a8 = camera.position.distanceTo(
                    new _0x275f13.Vector3(_0x45e6f1, _0x53568f, _0x30a895)
                );
                if (_0x4dd6a8 < 0xa) {
                    _0x466d44 = true;
                    break;
                }
            }
            if (_0x466d44) {
                if (_0x279c1e.material !== _0x279c1e.userData.materialNear) {
                    _0x279c1e.material = _0x279c1e.userData.materialNear;
                    _0x279c1e.geometry = _0x279c1e.userData.geometryNear;
                }
            } else if (_0x279c1e.material !== _0x279c1e.userData.materialFar) {
                _0x279c1e.material = _0x279c1e.userData.materialFar;
                _0x279c1e.geometry = _0x279c1e.userData.geometryFar;
            }
        }
    });
    planet.lookAt(camera.position);
    animatePlanetSystem();
    if (
        starField &&
        starField.material &&
        starField.material.opacity !== undefined
    ) {
        starField.material.opacity = 0x1;
        starField.material.transparent = false;
    }
    renderer.render(scene, camera);
}
function createHintText() {
    const _0x5afb93 = document.createElement("canvas");
    _0x5afb93.width = _0x5afb93.height = 0x200;
    const _0x4c87c1 = _0x5afb93.getContext("2d");
    _0x4c87c1.font = "bold 50px Arial, sans-serif";
    _0x4c87c1.textAlign = "center";
    _0x4c87c1.textBaseline = "middle";
    _0x4c87c1.shadowColor = "#ffb3de";
    _0x4c87c1.shadowBlur = 0x5;
    _0x4c87c1.lineWidth = 0x2;
    _0x4c87c1.strokeStyle = "rgba(255, 200, 220, 0.8)";
    _0x4c87c1.strokeText("Chạm Vào Tinh Cầu", 256, 256);
    _0x4c87c1.shadowColor = "#e0b3ff";
    _0x4c87c1.shadowBlur = 0x5;
    _0x4c87c1.lineWidth = 0x2;
    _0x4c87c1.strokeStyle = "rgba(220, 180, 255, 0.5)";
    _0x4c87c1.strokeText("Chạm Vào Tinh Cầu", 256, 256);
    _0x4c87c1.shadowColor = "transparent";
    _0x4c87c1.shadowBlur = 0x0;
    _0x4c87c1.fillStyle = "white";
    _0x4c87c1.fillText("Chạm Vào Tinh Cầu", 256, 256);
    const _0x37587a = new _0x275f13.CanvasTexture(_0x5afb93);
    _0x37587a.needsUpdate = true;
    const _0x3371ab = new _0x275f13.MeshBasicMaterial({
        map: _0x37587a,
        transparent: true,
        side: _0x275f13.DoubleSide,
    });
    const _0x14c212 = new _0x275f13.PlaneGeometry(0x10, 0x8);
    hintText = new _0x275f13.Mesh(_0x14c212, _0x3371ab);
    hintText.position.set(0x0, 0xf, 0x0);
    scene.add(hintText);
}
createShootingStar();
createHintIcon();
createHintText();
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.target.set(0x0, 0x0, 0x0);
    controls.update();
});
function startCameraAnimation() {
    const _0xed71fc = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
    };
    const _0x12f7c3 = {
        x: _0xed71fc.x,
        y: 0x0,
        z: _0xed71fc.z,
    };
    const _0x11f0f3 = {
        x: _0xed71fc.x,
        y: 0x0,
        z: 0xa0,
    };
    const _0xcee8e = {
        x: -0x28,
        y: 0x64,
        z: 0x64,
    };
    let _0x360509 = 0x0;
    function _0x349f93() {
        _0x360509 += 0.00101;
        let _0x3015fe;
        if (_0x360509 < 0.2) {
            let _0x1142e7 = _0x360509 / 0.2;
            _0x3015fe = {
                x: _0xed71fc.x + (_0x12f7c3.x - _0xed71fc.x) * _0x1142e7,
                y: _0xed71fc.y + (0x0 - _0xed71fc.y) * _0x1142e7,
                z: _0xed71fc.z + (_0x12f7c3.z - _0xed71fc.z) * _0x1142e7,
            };
        } else {
            if (_0x360509 < 0.75) {
                let _0x5d83a8 = (_0x360509 - 0.2) / 0.55;
                _0x3015fe = {
                    x: _0x12f7c3.x + (_0x11f0f3.x - _0x12f7c3.x) * _0x5d83a8,
                    y: 0x0 + 0 * _0x5d83a8,
                    z: _0x12f7c3.z + (0xa0 - _0x12f7c3.z) * _0x5d83a8,
                };
            } else {
                if (_0x360509 < 1.15) {
                    let _0x28df9f = (_0x360509 - 0.2 - 0.55) / 0.4;
                    let _0x251b94 = 0.5 - 0.5 * Math.cos(Math.PI * _0x28df9f);
                    _0x3015fe = {
                        x: _0x11f0f3.x + (_0xcee8e.x - _0x11f0f3.x) * _0x251b94,
                        y: 0x0 + 100 * _0x251b94,
                        z: 0xa0 + -60 * _0x251b94,
                    };
                } else {
                    camera.position.set(_0xcee8e.x, 0x64, 0x64);
                    camera.lookAt(0x0, 0x0, 0x0);
                    controls.target.set(0x0, 0x0, 0x0);
                    controls.update();
                    controls.enabled = true;
                    return;
                }
            }
        }
        camera.position.set(_0x3015fe.x, _0x3015fe.y, _0x3015fe.z);
        camera.lookAt(0x0, 0x0, 0x0);
        requestAnimationFrame(_0x349f93);
    }
    controls.enabled = false;
    _0x349f93();
}
const raycaster = new _0x275f13.Raycaster();
const mouse = new _0x275f13.Vector2();
let introStarted = false;
const originalStarCount = starGeometry.getAttribute("position").count;
if (starField && starField.geometry) {
    starField.geometry.setDrawRange(0x0, Math.floor(originalStarCount * 0.1));
}
function requestFullScreen() {
    const _0x5a4ad7 = document.documentElement;
    if (_0x5a4ad7.requestFullscreen) {
        _0x5a4ad7.requestFullscreen();
    } else {
        if (_0x5a4ad7.mozRequestFullScreen) {
            _0x5a4ad7.mozRequestFullScreen();
        } else {
            if (_0x5a4ad7.webkitRequestFullscreen) {
                _0x5a4ad7.webkitRequestFullscreen();
            } else if (_0x5a4ad7.msRequestFullscreen) {
                _0x5a4ad7.msRequestFullscreen();
            }
        }
    }
}
function onCanvasClick(_0x575832) {
    if (introStarted) {
        return;
    }
    const _0x4af5b8 = renderer.domElement.getBoundingClientRect();
    mouse.x =
        ((_0x575832.clientX - _0x4af5b8.left) / _0x4af5b8.width) * 0x2 - 0x1;
    mouse.y =
        -((_0x575832.clientY - _0x4af5b8.top) / _0x4af5b8.height) * 0x2 + 0x1;
    raycaster.setFromCamera(mouse, camera);
    const _0x351d25 = raycaster.intersectObject(planet);
    if (_0x351d25.length > 0x0) {
        requestFullScreen();
        introStarted = true;
        fadeInProgress = true;
        document.body.classList.add("intro-started");
        startCameraAnimation();
        if (starField && starField.geometry) {
            starField.geometry.setDrawRange(0x0, originalStarCount);
        }
    } else {
        if (introStarted) {
            const _0x10fbb8 = raycaster.intersectObjects(heartPointClouds);
            if (_0x10fbb8.length > 0x0) {
                const _0x194f4e = _0x10fbb8[0x0].object;
                controls.target.copy(_0x194f4e.position);
            }
        }
    }
}
renderer.domElement.addEventListener("click", onCanvasClick);
animate();
planet.name = "main-planet";
centralGlow.name = "main-glow";
function setFullScreen() {
    const _0x480ccb = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", _0x480ccb + "px");
    const _0x4fd040 = document.getElementById("container");
    if (_0x4fd040) {
        _0x4fd040.style.height = window.innerHeight + "px";
    }
}
window.addEventListener("resize", setFullScreen);
window.addEventListener("orientationchange", () => {
    setTimeout(setFullScreen, 0x12c);
});
setFullScreen();
const preventDefault = (_0x37fa9a) => _0x37fa9a.preventDefault();
document.addEventListener("touchmove", preventDefault, {
    passive: false,
});
document.addEventListener("gesturestart", preventDefault, {
    passive: false,
});
const container = document.getElementById("container");
if (container) {
    container.addEventListener("touchmove", preventDefault, {
        passive: false,
    });
}
function checkOrientation() {
    const _0x244abc =
        window.innerHeight > window.innerWidth && "ontouchstart" in window;
    if (_0x244abc) {
        document.body.classList.add("portrait-mode");
    } else {
        document.body.classList.remove("portrait-mode");
    }
}
window.addEventListener("DOMContentLoaded", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", () => {
    setTimeout(checkOrientation, 0xc8);
});
