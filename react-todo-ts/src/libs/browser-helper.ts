
export function getBrowserName() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    switch (true) {
        case userAgent.indexOf("edge") > -1: return "MS Edge";
        case userAgent.indexOf("edg/") > -1: return "Edge ( chromium based)";
        case userAgent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        case userAgent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case userAgent.indexOf("trident") > -1: return "MS IE";
        case userAgent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case userAgent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }
}