/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  /** Error code */
  code?: number;
  /** Error name */
  status?: string;
  /** Error message */
  message?: string;
  /** Errors */
  errors?: Record<string, any>;
}

export interface PaginationMetadata {
  total?: number;
  total_pages?: number;
  first_page?: number;
  last_page?: number;
  page?: number;
  previous_page?: number;
  next_page?: number;
}

export interface HealthResponse {
  /**
   * 服务名称
   * @example "string"
   */
  service: string;
  /**
   * 服务状态
   * @example "string"
   */
  status: string;
  /**
   * 服务版本
   * @example "string"
   */
  version: string;
  /**
   * 运行时间（秒）
   * @default null
   * @example 0
   */
  uptime?: number | null;
  /**
   * 最后检查时间
   * @default null
   * @example "string"
   */
  last_check?: string | null;
}

export interface SucHealthResponse {
  /**
   * 1为成功，0为失败
   * @default 1
   * @example 1
   */
  state?: number | null;
  /**
   * 返回信息
   * @default "success"
   * @example "string"
   */
  msg?: string | null;
  data: HealthResponse;
}

export interface FeishuAccessTokenRequest {
  /**
   * 飞书授权后返回的临时授权码
   * @example "string"
   */
  code: string;
  /**
   * 飞书应用 App ID，不传则使用配置
   * @default null
   * @example "string"
   */
  app_id?: string | null;
}

export interface FeishuAccessTokenResponse {
  /**
   * 用户访问凭证
   * @example "string"
   */
  access_token: string;
  /**
   * 凭证有效期(秒)
   * @example 1
   */
  expires_in: number;
  /** 用户信息 */
  user_info?: any;
}

export interface SucFeishuAccessTokenResponse {
  /**
   * 1为成功，0为失败
   * @default 1
   * @example 1
   */
  state?: number | null;
  /**
   * 返回信息
   * @default "success"
   * @example "string"
   */
  msg?: string | null;
  data: FeishuAccessTokenResponse;
}

export interface FeishuJssdkTicketResponse {
  /**
   * JSSDK 鉴权票据
   * @example "string"
   */
  ticket: string;
  /**
   * 票据有效期（秒）
   * @example 1
   */
  expire_in: number;
}

export interface SucFeishuJssdkTicketResponse {
  /**
   * 1为成功，0为失败
   * @default 1
   * @example 1
   */
  state?: number | null;
  /**
   * 返回信息
   * @default "success"
   * @example "string"
   */
  msg?: string | null;
  data: FeishuJssdkTicketResponse;
}

export interface EcsbUserInfoRequest {
  /**
   * 润工作新单点 run3token
   * @example "string"
   */
  run3token: string;
  /**
   * 飞书应用 App ID，用于请求头，不传则使用配置
   * @default null
   * @example "string"
   */
  app_id?: string | null;
}

export interface EcsbJwtTokenResponse {
  /**
   * 用户 JWT 凭证
   * @example "string"
   */
  jwt_token: string;
  /**
   * 用户 ldap 账号
   * @default null
   * @example "string"
   */
  user_id?: string | null;
}

export interface SucEcsbJwtTokenResponse {
  /**
   * 1为成功，0为失败
   * @default 1
   * @example 1
   */
  state?: number | null;
  /**
   * 返回信息
   * @default "success"
   * @example "string"
   */
  msg?: string | null;
  data: EcsbJwtTokenResponse;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  'data' | 'params' | 'url' | 'responseType'
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  'data' | 'cancelToken'
> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Adapter Runwork API
 * @version v1
 * @contact API Support
 *
 * 润工作适配服务 API，提供健康检查、飞书 OAuth、华润 ECSB 等接口。
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 服务健康检查接口，用于探活和监控
     *
     * @tags health
     * @name AdapterRunworkHealth
     * @summary 健康检查
     * @request GET:/api/adapter_runwork/health
     */
    adapterRunworkHealth: (params: RequestParams = {}) =>
      this.request<SucHealthResponse, Error>({
        path: `/api/adapter_runwork/health`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 使用飞书授权回调的 code 换取 access_token，同时返回用户信息（单点信息）
     *
     * @tags feishu
     * @name AdapterRunworkFeishuAccessToken
     * @summary 授权码换 access_token 及用户信息
     * @request POST:/api/adapter_runwork/feishu/access_token
     */
    adapterRunworkFeishuAccessToken: (data: FeishuAccessTokenRequest, params: RequestParams = {}) =>
      this.request<SucFeishuAccessTokenResponse, Error>({
        path: `/api/adapter_runwork/feishu/access_token`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 调用飞书 open-apis/jssdk/ticket/get。access_token 从请求头 Authorization: Bearer <access_token> 获取，用于前端 JSSDK 鉴权
     *
     * @tags feishu
     * @name AdapterRunworkFeishuTicket
     * @summary 获取 JSSDK ticket
     * @request POST:/api/adapter_runwork/feishu/ticket
     */
    adapterRunworkFeishuTicket: (params: RequestParams = {}) =>
      this.request<SucFeishuJssdkTicketResponse, Error>({
        path: `/api/adapter_runwork/feishu/ticket`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description 调用 ECSB 获取用户信息，若 RETURN_DATA 含 jwt_token 则返回；否则需配置独立 jwtToken 服务
     *
     * @tags ecsb
     * @name AdapterRunworkEcsbJwtTokenByRun3Token
     * @summary 根据 run3token 获取用户 jwtToken
     * @request POST:/api/adapter_runwork/ecsb/jwt_token_by_run3token
     */
    adapterRunworkEcsbJwtTokenByRun3Token: (
      data: EcsbUserInfoRequest,
      params: RequestParams = {},
    ) =>
      this.request<SucEcsbJwtTokenResponse, Error>({
        path: `/api/adapter_runwork/ecsb/jwt_token_by_run3token`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
