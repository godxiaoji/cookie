interface Options {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
}
/**
 * 获取所有的cookie
 */
declare function getAllCookies(): Record<string, string>;
/**
 * 获取指定cookie
 * @param {String} name cookie名称
 */
declare function getCookie(name: string): string;
/**
 * 设置指定cookie
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
declare function setCookie(name: string, value: number | string | null, options?: Options): string;
/**
 * 序列化的cookie指令
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
declare function serialize(name: string, value: number | string | null, options?: Options): string;
/**
 * 删除指定cookie
 * @param name cookie名称
 * @param options {expires, path, domain, secure}
 */
declare function removeCookie(name: string, options?: Options): string;
/**
 * 操作cookie
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
declare function cookie(name: string, value: number | string | null, options?: Options): string;
declare namespace cookie {
    var set: typeof setCookie;
    var get: typeof getCookie;
    var getAll: typeof getAllCookies;
    var remove: typeof removeCookie;
    var serialize: typeof import("./cookie").serialize;
}
export { getCookie, setCookie, getAllCookies, removeCookie, serialize };
export default cookie;
