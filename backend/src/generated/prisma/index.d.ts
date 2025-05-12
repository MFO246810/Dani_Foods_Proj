
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Discounted
 * 
 */
export type Discounted = $Result.DefaultSelection<Prisma.$DiscountedPayload>
/**
 * Model Employee_s
 * 
 */
export type Employee_s = $Result.DefaultSelection<Prisma.$Employee_sPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Promo
 * 
 */
export type Promo = $Result.DefaultSelection<Prisma.$PromoPayload>
/**
 * Model Promo_items
 * 
 */
export type Promo_items = $Result.DefaultSelection<Prisma.$Promo_itemsPayload>
/**
 * Model Shipping_Table
 * 
 */
export type Shipping_Table = $Result.DefaultSelection<Prisma.$Shipping_TablePayload>
/**
 * Model User_Notifications
 * 
 */
export type User_Notifications = $Result.DefaultSelection<Prisma.$User_NotificationsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Discounteds
 * const discounteds = await prisma.discounted.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Discounteds
   * const discounteds = await prisma.discounted.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.discounted`: Exposes CRUD operations for the **Discounted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounteds
    * const discounteds = await prisma.discounted.findMany()
    * ```
    */
  get discounted(): Prisma.DiscountedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee_s`: Exposes CRUD operations for the **Employee_s** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employee_s
    * const employee_s = await prisma.employee_s.findMany()
    * ```
    */
  get employee_s(): Prisma.Employee_sDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promo`: Exposes CRUD operations for the **Promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promo.findMany()
    * ```
    */
  get promo(): Prisma.PromoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promo_items`: Exposes CRUD operations for the **Promo_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promo_items
    * const promo_items = await prisma.promo_items.findMany()
    * ```
    */
  get promo_items(): Prisma.Promo_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipping_Table`: Exposes CRUD operations for the **Shipping_Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipping_Tables
    * const shipping_Tables = await prisma.shipping_Table.findMany()
    * ```
    */
  get shipping_Table(): Prisma.Shipping_TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Notifications`: Exposes CRUD operations for the **User_Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Notifications
    * const user_Notifications = await prisma.user_Notifications.findMany()
    * ```
    */
  get user_Notifications(): Prisma.User_NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Discounted: 'Discounted',
    Employee_s: 'Employee_s',
    OrderItems: 'OrderItems',
    Orders: 'Orders',
    Product: 'Product',
    Promo: 'Promo',
    Promo_items: 'Promo_items',
    Shipping_Table: 'Shipping_Table',
    User_Notifications: 'User_Notifications',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "discounted" | "employee_s" | "orderItems" | "orders" | "product" | "promo" | "promo_items" | "shipping_Table" | "user_Notifications" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Discounted: {
        payload: Prisma.$DiscountedPayload<ExtArgs>
        fields: Prisma.DiscountedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          findFirst: {
            args: Prisma.DiscountedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          findMany: {
            args: Prisma.DiscountedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>[]
          }
          create: {
            args: Prisma.DiscountedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          createMany: {
            args: Prisma.DiscountedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiscountedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          update: {
            args: Prisma.DiscountedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          deleteMany: {
            args: Prisma.DiscountedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscountedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountedPayload>
          }
          aggregate: {
            args: Prisma.DiscountedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscounted>
          }
          groupBy: {
            args: Prisma.DiscountedGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountedGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountedCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountedCountAggregateOutputType> | number
          }
        }
      }
      Employee_s: {
        payload: Prisma.$Employee_sPayload<ExtArgs>
        fields: Prisma.Employee_sFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Employee_sFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Employee_sFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          findFirst: {
            args: Prisma.Employee_sFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Employee_sFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          findMany: {
            args: Prisma.Employee_sFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>[]
          }
          create: {
            args: Prisma.Employee_sCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          createMany: {
            args: Prisma.Employee_sCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Employee_sDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          update: {
            args: Prisma.Employee_sUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          deleteMany: {
            args: Prisma.Employee_sDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Employee_sUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Employee_sUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Employee_sPayload>
          }
          aggregate: {
            args: Prisma.Employee_sAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee_s>
          }
          groupBy: {
            args: Prisma.Employee_sGroupByArgs<ExtArgs>
            result: $Utils.Optional<Employee_sGroupByOutputType>[]
          }
          count: {
            args: Prisma.Employee_sCountArgs<ExtArgs>
            result: $Utils.Optional<Employee_sCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Promo: {
        payload: Prisma.$PromoPayload<ExtArgs>
        fields: Prisma.PromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findFirst: {
            args: Prisma.PromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findMany: {
            args: Prisma.PromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          create: {
            args: Prisma.PromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          createMany: {
            args: Prisma.PromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          update: {
            args: Prisma.PromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          deleteMany: {
            args: Prisma.PromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          aggregate: {
            args: Prisma.PromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromo>
          }
          groupBy: {
            args: Prisma.PromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCountAggregateOutputType> | number
          }
        }
      }
      Promo_items: {
        payload: Prisma.$Promo_itemsPayload<ExtArgs>
        fields: Prisma.Promo_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Promo_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Promo_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          findFirst: {
            args: Prisma.Promo_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Promo_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          findMany: {
            args: Prisma.Promo_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>[]
          }
          create: {
            args: Prisma.Promo_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          createMany: {
            args: Prisma.Promo_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Promo_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          update: {
            args: Prisma.Promo_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          deleteMany: {
            args: Prisma.Promo_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Promo_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Promo_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Promo_itemsPayload>
          }
          aggregate: {
            args: Prisma.Promo_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromo_items>
          }
          groupBy: {
            args: Prisma.Promo_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Promo_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Promo_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Promo_itemsCountAggregateOutputType> | number
          }
        }
      }
      Shipping_Table: {
        payload: Prisma.$Shipping_TablePayload<ExtArgs>
        fields: Prisma.Shipping_TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shipping_TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shipping_TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          findFirst: {
            args: Prisma.Shipping_TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shipping_TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          findMany: {
            args: Prisma.Shipping_TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>[]
          }
          create: {
            args: Prisma.Shipping_TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          createMany: {
            args: Prisma.Shipping_TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Shipping_TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          update: {
            args: Prisma.Shipping_TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          deleteMany: {
            args: Prisma.Shipping_TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shipping_TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Shipping_TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipping_TablePayload>
          }
          aggregate: {
            args: Prisma.Shipping_TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipping_Table>
          }
          groupBy: {
            args: Prisma.Shipping_TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shipping_TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Shipping_TableCountArgs<ExtArgs>
            result: $Utils.Optional<Shipping_TableCountAggregateOutputType> | number
          }
        }
      }
      User_Notifications: {
        payload: Prisma.$User_NotificationsPayload<ExtArgs>
        fields: Prisma.User_NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          findFirst: {
            args: Prisma.User_NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          findMany: {
            args: Prisma.User_NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>[]
          }
          create: {
            args: Prisma.User_NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          createMany: {
            args: Prisma.User_NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          update: {
            args: Prisma.User_NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.User_NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_NotificationsPayload>
          }
          aggregate: {
            args: Prisma.User_NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Notifications>
          }
          groupBy: {
            args: Prisma.User_NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<User_NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    discounted?: DiscountedOmit
    employee_s?: Employee_sOmit
    orderItems?: OrderItemsOmit
    orders?: OrdersOmit
    product?: ProductOmit
    promo?: PromoOmit
    promo_items?: Promo_itemsOmit
    shipping_Table?: Shipping_TableOmit
    user_Notifications?: User_NotificationsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderItemsCountOutputType
   */

  export type OrderItemsCountOutputType = {
    Discounted: number
  }

  export type OrderItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Discounted?: boolean | OrderItemsCountOutputTypeCountDiscountedArgs
  }

  // Custom InputTypes
  /**
   * OrderItemsCountOutputType without action
   */
  export type OrderItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemsCountOutputType
     */
    select?: OrderItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemsCountOutputType without action
   */
  export type OrderItemsCountOutputTypeCountDiscountedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountedWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Shipping_Table: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shipping_Table?: boolean | OrdersCountOutputTypeCountShipping_TableArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountShipping_TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shipping_TableWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    OrderItems: number
    Promo_items: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    Promo_items?: boolean | ProductCountOutputTypeCountPromo_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPromo_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Promo_itemsWhereInput
  }


  /**
   * Count Type Promo_itemsCountOutputType
   */

  export type Promo_itemsCountOutputType = {
    Discounted: number
  }

  export type Promo_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Discounted?: boolean | Promo_itemsCountOutputTypeCountDiscountedArgs
  }

  // Custom InputTypes
  /**
   * Promo_itemsCountOutputType without action
   */
  export type Promo_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_itemsCountOutputType
     */
    select?: Promo_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Promo_itemsCountOutputType without action
   */
  export type Promo_itemsCountOutputTypeCountDiscountedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountedWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Employee_s: number
    Orders: number
    User_Notifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee_s?: boolean | UsersCountOutputTypeCountEmployee_sArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    User_Notifications?: boolean | UsersCountOutputTypeCountUser_NotificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmployee_sArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Employee_sWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_NotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_NotificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Discounted
   */

  export type AggregateDiscounted = {
    _count: DiscountedCountAggregateOutputType | null
    _avg: DiscountedAvgAggregateOutputType | null
    _sum: DiscountedSumAggregateOutputType | null
    _min: DiscountedMinAggregateOutputType | null
    _max: DiscountedMaxAggregateOutputType | null
  }

  export type DiscountedAvgAggregateOutputType = {
    id: number | null
    Order_item_id: number | null
    Promo_Id: number | null
    Amount: number | null
  }

  export type DiscountedSumAggregateOutputType = {
    id: number | null
    Order_item_id: number | null
    Promo_Id: number | null
    Amount: number | null
  }

  export type DiscountedMinAggregateOutputType = {
    id: number | null
    Order_item_id: number | null
    Promo_Id: number | null
    Amount: number | null
  }

  export type DiscountedMaxAggregateOutputType = {
    id: number | null
    Order_item_id: number | null
    Promo_Id: number | null
    Amount: number | null
  }

  export type DiscountedCountAggregateOutputType = {
    id: number
    Order_item_id: number
    Promo_Id: number
    Amount: number
    _all: number
  }


  export type DiscountedAvgAggregateInputType = {
    id?: true
    Order_item_id?: true
    Promo_Id?: true
    Amount?: true
  }

  export type DiscountedSumAggregateInputType = {
    id?: true
    Order_item_id?: true
    Promo_Id?: true
    Amount?: true
  }

  export type DiscountedMinAggregateInputType = {
    id?: true
    Order_item_id?: true
    Promo_Id?: true
    Amount?: true
  }

  export type DiscountedMaxAggregateInputType = {
    id?: true
    Order_item_id?: true
    Promo_Id?: true
    Amount?: true
  }

  export type DiscountedCountAggregateInputType = {
    id?: true
    Order_item_id?: true
    Promo_Id?: true
    Amount?: true
    _all?: true
  }

  export type DiscountedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounted to aggregate.
     */
    where?: DiscountedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounteds to fetch.
     */
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounteds
    **/
    _count?: true | DiscountedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountedMaxAggregateInputType
  }

  export type GetDiscountedAggregateType<T extends DiscountedAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscounted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscounted[P]>
      : GetScalarType<T[P], AggregateDiscounted[P]>
  }




  export type DiscountedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountedWhereInput
    orderBy?: DiscountedOrderByWithAggregationInput | DiscountedOrderByWithAggregationInput[]
    by: DiscountedScalarFieldEnum[] | DiscountedScalarFieldEnum
    having?: DiscountedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountedCountAggregateInputType | true
    _avg?: DiscountedAvgAggregateInputType
    _sum?: DiscountedSumAggregateInputType
    _min?: DiscountedMinAggregateInputType
    _max?: DiscountedMaxAggregateInputType
  }

  export type DiscountedGroupByOutputType = {
    id: number
    Order_item_id: number | null
    Promo_Id: number | null
    Amount: number
    _count: DiscountedCountAggregateOutputType | null
    _avg: DiscountedAvgAggregateOutputType | null
    _sum: DiscountedSumAggregateOutputType | null
    _min: DiscountedMinAggregateOutputType | null
    _max: DiscountedMaxAggregateOutputType | null
  }

  type GetDiscountedGroupByPayload<T extends DiscountedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountedGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountedGroupByOutputType[P]>
        }
      >
    >


  export type DiscountedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Order_item_id?: boolean
    Promo_Id?: boolean
    Amount?: boolean
    OrderItems?: boolean | Discounted$OrderItemsArgs<ExtArgs>
    Promo_items?: boolean | Discounted$Promo_itemsArgs<ExtArgs>
  }, ExtArgs["result"]["discounted"]>



  export type DiscountedSelectScalar = {
    id?: boolean
    Order_item_id?: boolean
    Promo_Id?: boolean
    Amount?: boolean
  }

  export type DiscountedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Order_item_id" | "Promo_Id" | "Amount", ExtArgs["result"]["discounted"]>
  export type DiscountedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItems?: boolean | Discounted$OrderItemsArgs<ExtArgs>
    Promo_items?: boolean | Discounted$Promo_itemsArgs<ExtArgs>
  }

  export type $DiscountedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discounted"
    objects: {
      OrderItems: Prisma.$OrderItemsPayload<ExtArgs> | null
      Promo_items: Prisma.$Promo_itemsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Order_item_id: number | null
      Promo_Id: number | null
      Amount: number
    }, ExtArgs["result"]["discounted"]>
    composites: {}
  }

  type DiscountedGetPayload<S extends boolean | null | undefined | DiscountedDefaultArgs> = $Result.GetResult<Prisma.$DiscountedPayload, S>

  type DiscountedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountedCountAggregateInputType | true
    }

  export interface DiscountedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discounted'], meta: { name: 'Discounted' } }
    /**
     * Find zero or one Discounted that matches the filter.
     * @param {DiscountedFindUniqueArgs} args - Arguments to find a Discounted
     * @example
     * // Get one Discounted
     * const discounted = await prisma.discounted.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountedFindUniqueArgs>(args: SelectSubset<T, DiscountedFindUniqueArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discounted that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountedFindUniqueOrThrowArgs} args - Arguments to find a Discounted
     * @example
     * // Get one Discounted
     * const discounted = await prisma.discounted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountedFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounted that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedFindFirstArgs} args - Arguments to find a Discounted
     * @example
     * // Get one Discounted
     * const discounted = await prisma.discounted.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountedFindFirstArgs>(args?: SelectSubset<T, DiscountedFindFirstArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounted that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedFindFirstOrThrowArgs} args - Arguments to find a Discounted
     * @example
     * // Get one Discounted
     * const discounted = await prisma.discounted.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountedFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountedFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounteds
     * const discounteds = await prisma.discounted.findMany()
     * 
     * // Get first 10 Discounteds
     * const discounteds = await prisma.discounted.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountedWithIdOnly = await prisma.discounted.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountedFindManyArgs>(args?: SelectSubset<T, DiscountedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discounted.
     * @param {DiscountedCreateArgs} args - Arguments to create a Discounted.
     * @example
     * // Create one Discounted
     * const Discounted = await prisma.discounted.create({
     *   data: {
     *     // ... data to create a Discounted
     *   }
     * })
     * 
     */
    create<T extends DiscountedCreateArgs>(args: SelectSubset<T, DiscountedCreateArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounteds.
     * @param {DiscountedCreateManyArgs} args - Arguments to create many Discounteds.
     * @example
     * // Create many Discounteds
     * const discounted = await prisma.discounted.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountedCreateManyArgs>(args?: SelectSubset<T, DiscountedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discounted.
     * @param {DiscountedDeleteArgs} args - Arguments to delete one Discounted.
     * @example
     * // Delete one Discounted
     * const Discounted = await prisma.discounted.delete({
     *   where: {
     *     // ... filter to delete one Discounted
     *   }
     * })
     * 
     */
    delete<T extends DiscountedDeleteArgs>(args: SelectSubset<T, DiscountedDeleteArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discounted.
     * @param {DiscountedUpdateArgs} args - Arguments to update one Discounted.
     * @example
     * // Update one Discounted
     * const discounted = await prisma.discounted.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountedUpdateArgs>(args: SelectSubset<T, DiscountedUpdateArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounteds.
     * @param {DiscountedDeleteManyArgs} args - Arguments to filter Discounteds to delete.
     * @example
     * // Delete a few Discounteds
     * const { count } = await prisma.discounted.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountedDeleteManyArgs>(args?: SelectSubset<T, DiscountedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounteds
     * const discounted = await prisma.discounted.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountedUpdateManyArgs>(args: SelectSubset<T, DiscountedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discounted.
     * @param {DiscountedUpsertArgs} args - Arguments to update or create a Discounted.
     * @example
     * // Update or create a Discounted
     * const discounted = await prisma.discounted.upsert({
     *   create: {
     *     // ... data to create a Discounted
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discounted we want to update
     *   }
     * })
     */
    upsert<T extends DiscountedUpsertArgs>(args: SelectSubset<T, DiscountedUpsertArgs<ExtArgs>>): Prisma__DiscountedClient<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedCountArgs} args - Arguments to filter Discounteds to count.
     * @example
     * // Count the number of Discounteds
     * const count = await prisma.discounted.count({
     *   where: {
     *     // ... the filter for the Discounteds we want to count
     *   }
     * })
    **/
    count<T extends DiscountedCountArgs>(
      args?: Subset<T, DiscountedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discounted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountedAggregateArgs>(args: Subset<T, DiscountedAggregateArgs>): Prisma.PrismaPromise<GetDiscountedAggregateType<T>>

    /**
     * Group by Discounted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountedGroupByArgs['orderBy'] }
        : { orderBy?: DiscountedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discounted model
   */
  readonly fields: DiscountedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discounted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItems<T extends Discounted$OrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Discounted$OrderItemsArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Promo_items<T extends Discounted$Promo_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Discounted$Promo_itemsArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discounted model
   */
  interface DiscountedFieldRefs {
    readonly id: FieldRef<"Discounted", 'Int'>
    readonly Order_item_id: FieldRef<"Discounted", 'Int'>
    readonly Promo_Id: FieldRef<"Discounted", 'Int'>
    readonly Amount: FieldRef<"Discounted", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Discounted findUnique
   */
  export type DiscountedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter, which Discounted to fetch.
     */
    where: DiscountedWhereUniqueInput
  }

  /**
   * Discounted findUniqueOrThrow
   */
  export type DiscountedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter, which Discounted to fetch.
     */
    where: DiscountedWhereUniqueInput
  }

  /**
   * Discounted findFirst
   */
  export type DiscountedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter, which Discounted to fetch.
     */
    where?: DiscountedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounteds to fetch.
     */
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounteds.
     */
    cursor?: DiscountedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounteds.
     */
    distinct?: DiscountedScalarFieldEnum | DiscountedScalarFieldEnum[]
  }

  /**
   * Discounted findFirstOrThrow
   */
  export type DiscountedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter, which Discounted to fetch.
     */
    where?: DiscountedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounteds to fetch.
     */
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounteds.
     */
    cursor?: DiscountedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounteds.
     */
    distinct?: DiscountedScalarFieldEnum | DiscountedScalarFieldEnum[]
  }

  /**
   * Discounted findMany
   */
  export type DiscountedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter, which Discounteds to fetch.
     */
    where?: DiscountedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounteds to fetch.
     */
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounteds.
     */
    cursor?: DiscountedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounteds.
     */
    skip?: number
    distinct?: DiscountedScalarFieldEnum | DiscountedScalarFieldEnum[]
  }

  /**
   * Discounted create
   */
  export type DiscountedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * The data needed to create a Discounted.
     */
    data: XOR<DiscountedCreateInput, DiscountedUncheckedCreateInput>
  }

  /**
   * Discounted createMany
   */
  export type DiscountedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounteds.
     */
    data: DiscountedCreateManyInput | DiscountedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discounted update
   */
  export type DiscountedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * The data needed to update a Discounted.
     */
    data: XOR<DiscountedUpdateInput, DiscountedUncheckedUpdateInput>
    /**
     * Choose, which Discounted to update.
     */
    where: DiscountedWhereUniqueInput
  }

  /**
   * Discounted updateMany
   */
  export type DiscountedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounteds.
     */
    data: XOR<DiscountedUpdateManyMutationInput, DiscountedUncheckedUpdateManyInput>
    /**
     * Filter which Discounteds to update
     */
    where?: DiscountedWhereInput
    /**
     * Limit how many Discounteds to update.
     */
    limit?: number
  }

  /**
   * Discounted upsert
   */
  export type DiscountedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * The filter to search for the Discounted to update in case it exists.
     */
    where: DiscountedWhereUniqueInput
    /**
     * In case the Discounted found by the `where` argument doesn't exist, create a new Discounted with this data.
     */
    create: XOR<DiscountedCreateInput, DiscountedUncheckedCreateInput>
    /**
     * In case the Discounted was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountedUpdateInput, DiscountedUncheckedUpdateInput>
  }

  /**
   * Discounted delete
   */
  export type DiscountedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    /**
     * Filter which Discounted to delete.
     */
    where: DiscountedWhereUniqueInput
  }

  /**
   * Discounted deleteMany
   */
  export type DiscountedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounteds to delete
     */
    where?: DiscountedWhereInput
    /**
     * Limit how many Discounteds to delete.
     */
    limit?: number
  }

  /**
   * Discounted.OrderItems
   */
  export type Discounted$OrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
  }

  /**
   * Discounted.Promo_items
   */
  export type Discounted$Promo_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    where?: Promo_itemsWhereInput
  }

  /**
   * Discounted without action
   */
  export type DiscountedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
  }


  /**
   * Model Employee_s
   */

  export type AggregateEmployee_s = {
    _count: Employee_sCountAggregateOutputType | null
    _avg: Employee_sAvgAggregateOutputType | null
    _sum: Employee_sSumAggregateOutputType | null
    _min: Employee_sMinAggregateOutputType | null
    _max: Employee_sMaxAggregateOutputType | null
  }

  export type Employee_sAvgAggregateOutputType = {
    Employee_Id: number | null
    User_Id: number | null
  }

  export type Employee_sSumAggregateOutputType = {
    Employee_Id: number | null
    User_Id: number | null
  }

  export type Employee_sMinAggregateOutputType = {
    Employee_Id: number | null
    role: string | null
    User_Id: number | null
  }

  export type Employee_sMaxAggregateOutputType = {
    Employee_Id: number | null
    role: string | null
    User_Id: number | null
  }

  export type Employee_sCountAggregateOutputType = {
    Employee_Id: number
    role: number
    User_Id: number
    _all: number
  }


  export type Employee_sAvgAggregateInputType = {
    Employee_Id?: true
    User_Id?: true
  }

  export type Employee_sSumAggregateInputType = {
    Employee_Id?: true
    User_Id?: true
  }

  export type Employee_sMinAggregateInputType = {
    Employee_Id?: true
    role?: true
    User_Id?: true
  }

  export type Employee_sMaxAggregateInputType = {
    Employee_Id?: true
    role?: true
    User_Id?: true
  }

  export type Employee_sCountAggregateInputType = {
    Employee_Id?: true
    role?: true
    User_Id?: true
    _all?: true
  }

  export type Employee_sAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee_s to aggregate.
     */
    where?: Employee_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employee_s to fetch.
     */
    orderBy?: Employee_sOrderByWithRelationInput | Employee_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Employee_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employee_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employee_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employee_s
    **/
    _count?: true | Employee_sCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Employee_sAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Employee_sSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Employee_sMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Employee_sMaxAggregateInputType
  }

  export type GetEmployee_sAggregateType<T extends Employee_sAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee_s]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee_s[P]>
      : GetScalarType<T[P], AggregateEmployee_s[P]>
  }




  export type Employee_sGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Employee_sWhereInput
    orderBy?: Employee_sOrderByWithAggregationInput | Employee_sOrderByWithAggregationInput[]
    by: Employee_sScalarFieldEnum[] | Employee_sScalarFieldEnum
    having?: Employee_sScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Employee_sCountAggregateInputType | true
    _avg?: Employee_sAvgAggregateInputType
    _sum?: Employee_sSumAggregateInputType
    _min?: Employee_sMinAggregateInputType
    _max?: Employee_sMaxAggregateInputType
  }

  export type Employee_sGroupByOutputType = {
    Employee_Id: number
    role: string
    User_Id: number | null
    _count: Employee_sCountAggregateOutputType | null
    _avg: Employee_sAvgAggregateOutputType | null
    _sum: Employee_sSumAggregateOutputType | null
    _min: Employee_sMinAggregateOutputType | null
    _max: Employee_sMaxAggregateOutputType | null
  }

  type GetEmployee_sGroupByPayload<T extends Employee_sGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employee_sGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Employee_sGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Employee_sGroupByOutputType[P]>
            : GetScalarType<T[P], Employee_sGroupByOutputType[P]>
        }
      >
    >


  export type Employee_sSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Employee_Id?: boolean
    role?: boolean
    User_Id?: boolean
    Users?: boolean | Employee_s$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["employee_s"]>



  export type Employee_sSelectScalar = {
    Employee_Id?: boolean
    role?: boolean
    User_Id?: boolean
  }

  export type Employee_sOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Employee_Id" | "role" | "User_Id", ExtArgs["result"]["employee_s"]>
  export type Employee_sInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Employee_s$UsersArgs<ExtArgs>
  }

  export type $Employee_sPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee_s"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Employee_Id: number
      role: string
      User_Id: number | null
    }, ExtArgs["result"]["employee_s"]>
    composites: {}
  }

  type Employee_sGetPayload<S extends boolean | null | undefined | Employee_sDefaultArgs> = $Result.GetResult<Prisma.$Employee_sPayload, S>

  type Employee_sCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Employee_sFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Employee_sCountAggregateInputType | true
    }

  export interface Employee_sDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee_s'], meta: { name: 'Employee_s' } }
    /**
     * Find zero or one Employee_s that matches the filter.
     * @param {Employee_sFindUniqueArgs} args - Arguments to find a Employee_s
     * @example
     * // Get one Employee_s
     * const employee_s = await prisma.employee_s.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Employee_sFindUniqueArgs>(args: SelectSubset<T, Employee_sFindUniqueArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee_s that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Employee_sFindUniqueOrThrowArgs} args - Arguments to find a Employee_s
     * @example
     * // Get one Employee_s
     * const employee_s = await prisma.employee_s.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Employee_sFindUniqueOrThrowArgs>(args: SelectSubset<T, Employee_sFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sFindFirstArgs} args - Arguments to find a Employee_s
     * @example
     * // Get one Employee_s
     * const employee_s = await prisma.employee_s.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Employee_sFindFirstArgs>(args?: SelectSubset<T, Employee_sFindFirstArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_s that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sFindFirstOrThrowArgs} args - Arguments to find a Employee_s
     * @example
     * // Get one Employee_s
     * const employee_s = await prisma.employee_s.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Employee_sFindFirstOrThrowArgs>(args?: SelectSubset<T, Employee_sFindFirstOrThrowArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employee_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employee_s
     * const employee_s = await prisma.employee_s.findMany()
     * 
     * // Get first 10 Employee_s
     * const employee_s = await prisma.employee_s.findMany({ take: 10 })
     * 
     * // Only select the `Employee_Id`
     * const employee_sWithEmployee_IdOnly = await prisma.employee_s.findMany({ select: { Employee_Id: true } })
     * 
     */
    findMany<T extends Employee_sFindManyArgs>(args?: SelectSubset<T, Employee_sFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee_s.
     * @param {Employee_sCreateArgs} args - Arguments to create a Employee_s.
     * @example
     * // Create one Employee_s
     * const Employee_s = await prisma.employee_s.create({
     *   data: {
     *     // ... data to create a Employee_s
     *   }
     * })
     * 
     */
    create<T extends Employee_sCreateArgs>(args: SelectSubset<T, Employee_sCreateArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employee_s.
     * @param {Employee_sCreateManyArgs} args - Arguments to create many Employee_s.
     * @example
     * // Create many Employee_s
     * const employee_s = await prisma.employee_s.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Employee_sCreateManyArgs>(args?: SelectSubset<T, Employee_sCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee_s.
     * @param {Employee_sDeleteArgs} args - Arguments to delete one Employee_s.
     * @example
     * // Delete one Employee_s
     * const Employee_s = await prisma.employee_s.delete({
     *   where: {
     *     // ... filter to delete one Employee_s
     *   }
     * })
     * 
     */
    delete<T extends Employee_sDeleteArgs>(args: SelectSubset<T, Employee_sDeleteArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee_s.
     * @param {Employee_sUpdateArgs} args - Arguments to update one Employee_s.
     * @example
     * // Update one Employee_s
     * const employee_s = await prisma.employee_s.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Employee_sUpdateArgs>(args: SelectSubset<T, Employee_sUpdateArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employee_s.
     * @param {Employee_sDeleteManyArgs} args - Arguments to filter Employee_s to delete.
     * @example
     * // Delete a few Employee_s
     * const { count } = await prisma.employee_s.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Employee_sDeleteManyArgs>(args?: SelectSubset<T, Employee_sDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employee_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employee_s
     * const employee_s = await prisma.employee_s.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Employee_sUpdateManyArgs>(args: SelectSubset<T, Employee_sUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee_s.
     * @param {Employee_sUpsertArgs} args - Arguments to update or create a Employee_s.
     * @example
     * // Update or create a Employee_s
     * const employee_s = await prisma.employee_s.upsert({
     *   create: {
     *     // ... data to create a Employee_s
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee_s we want to update
     *   }
     * })
     */
    upsert<T extends Employee_sUpsertArgs>(args: SelectSubset<T, Employee_sUpsertArgs<ExtArgs>>): Prisma__Employee_sClient<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employee_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sCountArgs} args - Arguments to filter Employee_s to count.
     * @example
     * // Count the number of Employee_s
     * const count = await prisma.employee_s.count({
     *   where: {
     *     // ... the filter for the Employee_s we want to count
     *   }
     * })
    **/
    count<T extends Employee_sCountArgs>(
      args?: Subset<T, Employee_sCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employee_sCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Employee_sAggregateArgs>(args: Subset<T, Employee_sAggregateArgs>): Prisma.PrismaPromise<GetEmployee_sAggregateType<T>>

    /**
     * Group by Employee_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_sGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Employee_sGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Employee_sGroupByArgs['orderBy'] }
        : { orderBy?: Employee_sGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Employee_sGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployee_sGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee_s model
   */
  readonly fields: Employee_sFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee_s.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Employee_sClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Employee_s$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Employee_s$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee_s model
   */
  interface Employee_sFieldRefs {
    readonly Employee_Id: FieldRef<"Employee_s", 'Int'>
    readonly role: FieldRef<"Employee_s", 'String'>
    readonly User_Id: FieldRef<"Employee_s", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee_s findUnique
   */
  export type Employee_sFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter, which Employee_s to fetch.
     */
    where: Employee_sWhereUniqueInput
  }

  /**
   * Employee_s findUniqueOrThrow
   */
  export type Employee_sFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter, which Employee_s to fetch.
     */
    where: Employee_sWhereUniqueInput
  }

  /**
   * Employee_s findFirst
   */
  export type Employee_sFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter, which Employee_s to fetch.
     */
    where?: Employee_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employee_s to fetch.
     */
    orderBy?: Employee_sOrderByWithRelationInput | Employee_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employee_s.
     */
    cursor?: Employee_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employee_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employee_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employee_s.
     */
    distinct?: Employee_sScalarFieldEnum | Employee_sScalarFieldEnum[]
  }

  /**
   * Employee_s findFirstOrThrow
   */
  export type Employee_sFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter, which Employee_s to fetch.
     */
    where?: Employee_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employee_s to fetch.
     */
    orderBy?: Employee_sOrderByWithRelationInput | Employee_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employee_s.
     */
    cursor?: Employee_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employee_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employee_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employee_s.
     */
    distinct?: Employee_sScalarFieldEnum | Employee_sScalarFieldEnum[]
  }

  /**
   * Employee_s findMany
   */
  export type Employee_sFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter, which Employee_s to fetch.
     */
    where?: Employee_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employee_s to fetch.
     */
    orderBy?: Employee_sOrderByWithRelationInput | Employee_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employee_s.
     */
    cursor?: Employee_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employee_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employee_s.
     */
    skip?: number
    distinct?: Employee_sScalarFieldEnum | Employee_sScalarFieldEnum[]
  }

  /**
   * Employee_s create
   */
  export type Employee_sCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee_s.
     */
    data: XOR<Employee_sCreateInput, Employee_sUncheckedCreateInput>
  }

  /**
   * Employee_s createMany
   */
  export type Employee_sCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employee_s.
     */
    data: Employee_sCreateManyInput | Employee_sCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee_s update
   */
  export type Employee_sUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee_s.
     */
    data: XOR<Employee_sUpdateInput, Employee_sUncheckedUpdateInput>
    /**
     * Choose, which Employee_s to update.
     */
    where: Employee_sWhereUniqueInput
  }

  /**
   * Employee_s updateMany
   */
  export type Employee_sUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employee_s.
     */
    data: XOR<Employee_sUpdateManyMutationInput, Employee_sUncheckedUpdateManyInput>
    /**
     * Filter which Employee_s to update
     */
    where?: Employee_sWhereInput
    /**
     * Limit how many Employee_s to update.
     */
    limit?: number
  }

  /**
   * Employee_s upsert
   */
  export type Employee_sUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee_s to update in case it exists.
     */
    where: Employee_sWhereUniqueInput
    /**
     * In case the Employee_s found by the `where` argument doesn't exist, create a new Employee_s with this data.
     */
    create: XOR<Employee_sCreateInput, Employee_sUncheckedCreateInput>
    /**
     * In case the Employee_s was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Employee_sUpdateInput, Employee_sUncheckedUpdateInput>
  }

  /**
   * Employee_s delete
   */
  export type Employee_sDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    /**
     * Filter which Employee_s to delete.
     */
    where: Employee_sWhereUniqueInput
  }

  /**
   * Employee_s deleteMany
   */
  export type Employee_sDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee_s to delete
     */
    where?: Employee_sWhereInput
    /**
     * Limit how many Employee_s to delete.
     */
    limit?: number
  }

  /**
   * Employee_s.Users
   */
  export type Employee_s$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Employee_s without action
   */
  export type Employee_sDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    Order_Items_Id: number | null
    Order_Id: number | null
    Product_Id: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    Order_Items_Id: number | null
    Order_Id: number | null
    Product_Id: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    Order_Items_Id: number | null
    Order_Id: number | null
    Product_Id: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    Order_Items_Id: number | null
    Order_Id: number | null
    Product_Id: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    Order_Items_Id: number
    Order_Id: number
    Product_Id: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    Order_Items_Id?: true
    Order_Id?: true
    Product_Id?: true
  }

  export type OrderItemsSumAggregateInputType = {
    Order_Items_Id?: true
    Order_Id?: true
    Product_Id?: true
  }

  export type OrderItemsMinAggregateInputType = {
    Order_Items_Id?: true
    Order_Id?: true
    Product_Id?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    Order_Items_Id?: true
    Order_Id?: true
    Product_Id?: true
  }

  export type OrderItemsCountAggregateInputType = {
    Order_Items_Id?: true
    Order_Id?: true
    Product_Id?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    Order_Items_Id: number
    Order_Id: number
    Product_Id: number | null
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Order_Items_Id?: boolean
    Order_Id?: boolean
    Product_Id?: boolean
    Discounted?: boolean | OrderItems$DiscountedArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Product?: boolean | OrderItems$ProductArgs<ExtArgs>
    _count?: boolean | OrderItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>



  export type OrderItemsSelectScalar = {
    Order_Items_Id?: boolean
    Order_Id?: boolean
    Product_Id?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Order_Items_Id" | "Order_Id" | "Product_Id", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Discounted?: boolean | OrderItems$DiscountedArgs<ExtArgs>
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Product?: boolean | OrderItems$ProductArgs<ExtArgs>
    _count?: boolean | OrderItemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      Discounted: Prisma.$DiscountedPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Order_Items_Id: number
      Order_Id: number
      Product_Id: number | null
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `Order_Items_Id`
     * const orderItemsWithOrder_Items_IdOnly = await prisma.orderItems.findMany({ select: { Order_Items_Id: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Discounted<T extends OrderItems$DiscountedArgs<ExtArgs> = {}>(args?: Subset<T, OrderItems$DiscountedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends OrderItems$ProductArgs<ExtArgs> = {}>(args?: Subset<T, OrderItems$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly Order_Items_Id: FieldRef<"OrderItems", 'Int'>
    readonly Order_Id: FieldRef<"OrderItems", 'Int'>
    readonly Product_Id: FieldRef<"OrderItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems.Discounted
   */
  export type OrderItems$DiscountedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    where?: DiscountedWhereInput
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    cursor?: DiscountedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountedScalarFieldEnum | DiscountedScalarFieldEnum[]
  }

  /**
   * OrderItems.Product
   */
  export type OrderItems$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    Order_Id: number | null
    User_ID: number | null
    Total: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    Order_Id: number | null
    User_ID: number | null
    Total: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    Order_Id: number | null
    Order_Date: Date | null
    Order_Time: Date | null
    User_ID: number | null
    Total: Decimal | null
  }

  export type OrdersMaxAggregateOutputType = {
    Order_Id: number | null
    Order_Date: Date | null
    Order_Time: Date | null
    User_ID: number | null
    Total: Decimal | null
  }

  export type OrdersCountAggregateOutputType = {
    Order_Id: number
    Order_Date: number
    Order_Time: number
    User_ID: number
    Total: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    Order_Id?: true
    User_ID?: true
    Total?: true
  }

  export type OrdersSumAggregateInputType = {
    Order_Id?: true
    User_ID?: true
    Total?: true
  }

  export type OrdersMinAggregateInputType = {
    Order_Id?: true
    Order_Date?: true
    Order_Time?: true
    User_ID?: true
    Total?: true
  }

  export type OrdersMaxAggregateInputType = {
    Order_Id?: true
    Order_Date?: true
    Order_Time?: true
    User_ID?: true
    Total?: true
  }

  export type OrdersCountAggregateInputType = {
    Order_Id?: true
    Order_Date?: true
    Order_Time?: true
    User_ID?: true
    Total?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    Order_Id: number
    Order_Date: Date
    Order_Time: Date
    User_ID: number | null
    Total: Decimal
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Order_Id?: boolean
    Order_Date?: boolean
    Order_Time?: boolean
    User_ID?: boolean
    Total?: boolean
    OrderItems?: boolean | Orders$OrderItemsArgs<ExtArgs>
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Shipping_Table?: boolean | Orders$Shipping_TableArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    Order_Id?: boolean
    Order_Date?: boolean
    Order_Time?: boolean
    User_ID?: boolean
    Total?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Order_Id" | "Order_Date" | "Order_Time" | "User_ID" | "Total", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItems?: boolean | Orders$OrderItemsArgs<ExtArgs>
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Shipping_Table?: boolean | Orders$Shipping_TableArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      OrderItems: Prisma.$OrderItemsPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Shipping_Table: Prisma.$Shipping_TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Order_Id: number
      Order_Date: Date
      Order_Time: Date
      User_ID: number | null
      Total: Prisma.Decimal
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `Order_Id`
     * const ordersWithOrder_IdOnly = await prisma.orders.findMany({ select: { Order_Id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItems<T extends Orders$OrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderItemsArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends Orders$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Shipping_Table<T extends Orders$Shipping_TableArgs<ExtArgs> = {}>(args?: Subset<T, Orders$Shipping_TableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly Order_Id: FieldRef<"Orders", 'Int'>
    readonly Order_Date: FieldRef<"Orders", 'DateTime'>
    readonly Order_Time: FieldRef<"Orders", 'DateTime'>
    readonly User_ID: FieldRef<"Orders", 'Int'>
    readonly Total: FieldRef<"Orders", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.OrderItems
   */
  export type Orders$OrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
  }

  /**
   * Orders.Users
   */
  export type Orders$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orders.Shipping_Table
   */
  export type Orders$Shipping_TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    where?: Shipping_TableWhereInput
    orderBy?: Shipping_TableOrderByWithRelationInput | Shipping_TableOrderByWithRelationInput[]
    cursor?: Shipping_TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shipping_TableScalarFieldEnum | Shipping_TableScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    Product_Id: number | null
    Product_Price: Decimal | null
    Product_Quatity: number | null
  }

  export type ProductSumAggregateOutputType = {
    Product_Id: number | null
    Product_Price: Decimal | null
    Product_Quatity: number | null
  }

  export type ProductMinAggregateOutputType = {
    Product_Id: number | null
    Product_Name: string | null
    Product_Description: string | null
    Product_Price: Decimal | null
    Product_Quatity: number | null
    Product_img_uri: string | null
  }

  export type ProductMaxAggregateOutputType = {
    Product_Id: number | null
    Product_Name: string | null
    Product_Description: string | null
    Product_Price: Decimal | null
    Product_Quatity: number | null
    Product_img_uri: string | null
  }

  export type ProductCountAggregateOutputType = {
    Product_Id: number
    Product_Name: number
    Product_Description: number
    Product_Price: number
    Product_Quatity: number
    Product_img_uri: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    Product_Id?: true
    Product_Price?: true
    Product_Quatity?: true
  }

  export type ProductSumAggregateInputType = {
    Product_Id?: true
    Product_Price?: true
    Product_Quatity?: true
  }

  export type ProductMinAggregateInputType = {
    Product_Id?: true
    Product_Name?: true
    Product_Description?: true
    Product_Price?: true
    Product_Quatity?: true
    Product_img_uri?: true
  }

  export type ProductMaxAggregateInputType = {
    Product_Id?: true
    Product_Name?: true
    Product_Description?: true
    Product_Price?: true
    Product_Quatity?: true
    Product_img_uri?: true
  }

  export type ProductCountAggregateInputType = {
    Product_Id?: true
    Product_Name?: true
    Product_Description?: true
    Product_Price?: true
    Product_Quatity?: true
    Product_img_uri?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal
    Product_Quatity: number
    Product_img_uri: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Product_Id?: boolean
    Product_Name?: boolean
    Product_Description?: boolean
    Product_Price?: boolean
    Product_Quatity?: boolean
    Product_img_uri?: boolean
    OrderItems?: boolean | Product$OrderItemsArgs<ExtArgs>
    Promo_items?: boolean | Product$Promo_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    Product_Id?: boolean
    Product_Name?: boolean
    Product_Description?: boolean
    Product_Price?: boolean
    Product_Quatity?: boolean
    Product_img_uri?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Product_Id" | "Product_Name" | "Product_Description" | "Product_Price" | "Product_Quatity" | "Product_img_uri", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItems?: boolean | Product$OrderItemsArgs<ExtArgs>
    Promo_items?: boolean | Product$Promo_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      OrderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
      Promo_items: Prisma.$Promo_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Product_Id: number
      Product_Name: string
      Product_Description: string
      Product_Price: Prisma.Decimal
      Product_Quatity: number
      Product_img_uri: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `Product_Id`
     * const productWithProduct_IdOnly = await prisma.product.findMany({ select: { Product_Id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItems<T extends Product$OrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Promo_items<T extends Product$Promo_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$Promo_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly Product_Id: FieldRef<"Product", 'Int'>
    readonly Product_Name: FieldRef<"Product", 'String'>
    readonly Product_Description: FieldRef<"Product", 'String'>
    readonly Product_Price: FieldRef<"Product", 'Decimal'>
    readonly Product_Quatity: FieldRef<"Product", 'Int'>
    readonly Product_img_uri: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.OrderItems
   */
  export type Product$OrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Product.Promo_items
   */
  export type Product$Promo_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    where?: Promo_itemsWhereInput
    orderBy?: Promo_itemsOrderByWithRelationInput | Promo_itemsOrderByWithRelationInput[]
    cursor?: Promo_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Promo_itemsScalarFieldEnum | Promo_itemsScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Promo
   */

  export type AggregatePromo = {
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  export type PromoAvgAggregateOutputType = {
    Id: number | null
    Discount_Percent: Decimal | null
  }

  export type PromoSumAggregateOutputType = {
    Id: number | null
    Discount_Percent: Decimal | null
  }

  export type PromoMinAggregateOutputType = {
    Id: number | null
    promo_name: string | null
    Discount_Percent: Decimal | null
    Start_Date: Date | null
    End_Date: Date | null
  }

  export type PromoMaxAggregateOutputType = {
    Id: number | null
    promo_name: string | null
    Discount_Percent: Decimal | null
    Start_Date: Date | null
    End_Date: Date | null
  }

  export type PromoCountAggregateOutputType = {
    Id: number
    promo_name: number
    Discount_Percent: number
    Start_Date: number
    End_Date: number
    _all: number
  }


  export type PromoAvgAggregateInputType = {
    Id?: true
    Discount_Percent?: true
  }

  export type PromoSumAggregateInputType = {
    Id?: true
    Discount_Percent?: true
  }

  export type PromoMinAggregateInputType = {
    Id?: true
    promo_name?: true
    Discount_Percent?: true
    Start_Date?: true
    End_Date?: true
  }

  export type PromoMaxAggregateInputType = {
    Id?: true
    promo_name?: true
    Discount_Percent?: true
    Start_Date?: true
    End_Date?: true
  }

  export type PromoCountAggregateInputType = {
    Id?: true
    promo_name?: true
    Discount_Percent?: true
    Start_Date?: true
    End_Date?: true
    _all?: true
  }

  export type PromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo to aggregate.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promos
    **/
    _count?: true | PromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoMaxAggregateInputType
  }

  export type GetPromoAggregateType<T extends PromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo[P]>
      : GetScalarType<T[P], AggregatePromo[P]>
  }




  export type PromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoWhereInput
    orderBy?: PromoOrderByWithAggregationInput | PromoOrderByWithAggregationInput[]
    by: PromoScalarFieldEnum[] | PromoScalarFieldEnum
    having?: PromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCountAggregateInputType | true
    _avg?: PromoAvgAggregateInputType
    _sum?: PromoSumAggregateInputType
    _min?: PromoMinAggregateInputType
    _max?: PromoMaxAggregateInputType
  }

  export type PromoGroupByOutputType = {
    Id: number
    promo_name: string
    Discount_Percent: Decimal
    Start_Date: Date
    End_Date: Date
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  type GetPromoGroupByPayload<T extends PromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoGroupByOutputType[P]>
            : GetScalarType<T[P], PromoGroupByOutputType[P]>
        }
      >
    >


  export type PromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    promo_name?: boolean
    Discount_Percent?: boolean
    Start_Date?: boolean
    End_Date?: boolean
    Promo_items?: boolean | Promo$Promo_itemsArgs<ExtArgs>
  }, ExtArgs["result"]["promo"]>



  export type PromoSelectScalar = {
    Id?: boolean
    promo_name?: boolean
    Discount_Percent?: boolean
    Start_Date?: boolean
    End_Date?: boolean
  }

  export type PromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "promo_name" | "Discount_Percent" | "Start_Date" | "End_Date", ExtArgs["result"]["promo"]>
  export type PromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promo_items?: boolean | Promo$Promo_itemsArgs<ExtArgs>
  }

  export type $PromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promo"
    objects: {
      Promo_items: Prisma.$Promo_itemsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      promo_name: string
      Discount_Percent: Prisma.Decimal
      Start_Date: Date
      End_Date: Date
    }, ExtArgs["result"]["promo"]>
    composites: {}
  }

  type PromoGetPayload<S extends boolean | null | undefined | PromoDefaultArgs> = $Result.GetResult<Prisma.$PromoPayload, S>

  type PromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCountAggregateInputType | true
    }

  export interface PromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promo'], meta: { name: 'Promo' } }
    /**
     * Find zero or one Promo that matches the filter.
     * @param {PromoFindUniqueArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoFindUniqueArgs>(args: SelectSubset<T, PromoFindUniqueArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoFindUniqueOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoFindFirstArgs>(args?: SelectSubset<T, PromoFindFirstArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promo.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promo.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const promoWithIdOnly = await prisma.promo.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PromoFindManyArgs>(args?: SelectSubset<T, PromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promo.
     * @param {PromoCreateArgs} args - Arguments to create a Promo.
     * @example
     * // Create one Promo
     * const Promo = await prisma.promo.create({
     *   data: {
     *     // ... data to create a Promo
     *   }
     * })
     * 
     */
    create<T extends PromoCreateArgs>(args: SelectSubset<T, PromoCreateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promos.
     * @param {PromoCreateManyArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCreateManyArgs>(args?: SelectSubset<T, PromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promo.
     * @param {PromoDeleteArgs} args - Arguments to delete one Promo.
     * @example
     * // Delete one Promo
     * const Promo = await prisma.promo.delete({
     *   where: {
     *     // ... filter to delete one Promo
     *   }
     * })
     * 
     */
    delete<T extends PromoDeleteArgs>(args: SelectSubset<T, PromoDeleteArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promo.
     * @param {PromoUpdateArgs} args - Arguments to update one Promo.
     * @example
     * // Update one Promo
     * const promo = await prisma.promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoUpdateArgs>(args: SelectSubset<T, PromoUpdateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promos.
     * @param {PromoDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoDeleteManyArgs>(args?: SelectSubset<T, PromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoUpdateManyArgs>(args: SelectSubset<T, PromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promo.
     * @param {PromoUpsertArgs} args - Arguments to update or create a Promo.
     * @example
     * // Update or create a Promo
     * const promo = await prisma.promo.upsert({
     *   create: {
     *     // ... data to create a Promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo we want to update
     *   }
     * })
     */
    upsert<T extends PromoUpsertArgs>(args: SelectSubset<T, PromoUpsertArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promo.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends PromoCountArgs>(
      args?: Subset<T, PromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoAggregateArgs>(args: Subset<T, PromoAggregateArgs>): Prisma.PrismaPromise<GetPromoAggregateType<T>>

    /**
     * Group by Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoGroupByArgs['orderBy'] }
        : { orderBy?: PromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promo model
   */
  readonly fields: PromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Promo_items<T extends Promo$Promo_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Promo$Promo_itemsArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promo model
   */
  interface PromoFieldRefs {
    readonly Id: FieldRef<"Promo", 'Int'>
    readonly promo_name: FieldRef<"Promo", 'String'>
    readonly Discount_Percent: FieldRef<"Promo", 'Decimal'>
    readonly Start_Date: FieldRef<"Promo", 'DateTime'>
    readonly End_Date: FieldRef<"Promo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promo findUnique
   */
  export type PromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findUniqueOrThrow
   */
  export type PromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findFirst
   */
  export type PromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findFirstOrThrow
   */
  export type PromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findMany
   */
  export type PromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promos to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo create
   */
  export type PromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to create a Promo.
     */
    data: XOR<PromoCreateInput, PromoUncheckedCreateInput>
  }

  /**
   * Promo createMany
   */
  export type PromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo update
   */
  export type PromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to update a Promo.
     */
    data: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
    /**
     * Choose, which Promo to update.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo updateMany
   */
  export type PromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo upsert
   */
  export type PromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The filter to search for the Promo to update in case it exists.
     */
    where: PromoWhereUniqueInput
    /**
     * In case the Promo found by the `where` argument doesn't exist, create a new Promo with this data.
     */
    create: XOR<PromoCreateInput, PromoUncheckedCreateInput>
    /**
     * In case the Promo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
  }

  /**
   * Promo delete
   */
  export type PromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter which Promo to delete.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo deleteMany
   */
  export type PromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promos to delete
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to delete.
     */
    limit?: number
  }

  /**
   * Promo.Promo_items
   */
  export type Promo$Promo_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    where?: Promo_itemsWhereInput
  }

  /**
   * Promo without action
   */
  export type PromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
  }


  /**
   * Model Promo_items
   */

  export type AggregatePromo_items = {
    _count: Promo_itemsCountAggregateOutputType | null
    _avg: Promo_itemsAvgAggregateOutputType | null
    _sum: Promo_itemsSumAggregateOutputType | null
    _min: Promo_itemsMinAggregateOutputType | null
    _max: Promo_itemsMaxAggregateOutputType | null
  }

  export type Promo_itemsAvgAggregateOutputType = {
    Promo_id: number | null
    Product_id: number | null
  }

  export type Promo_itemsSumAggregateOutputType = {
    Promo_id: number | null
    Product_id: number | null
  }

  export type Promo_itemsMinAggregateOutputType = {
    Promo_id: number | null
    Product_id: number | null
  }

  export type Promo_itemsMaxAggregateOutputType = {
    Promo_id: number | null
    Product_id: number | null
  }

  export type Promo_itemsCountAggregateOutputType = {
    Promo_id: number
    Product_id: number
    _all: number
  }


  export type Promo_itemsAvgAggregateInputType = {
    Promo_id?: true
    Product_id?: true
  }

  export type Promo_itemsSumAggregateInputType = {
    Promo_id?: true
    Product_id?: true
  }

  export type Promo_itemsMinAggregateInputType = {
    Promo_id?: true
    Product_id?: true
  }

  export type Promo_itemsMaxAggregateInputType = {
    Promo_id?: true
    Product_id?: true
  }

  export type Promo_itemsCountAggregateInputType = {
    Promo_id?: true
    Product_id?: true
    _all?: true
  }

  export type Promo_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo_items to aggregate.
     */
    where?: Promo_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promo_items to fetch.
     */
    orderBy?: Promo_itemsOrderByWithRelationInput | Promo_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Promo_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promo_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promo_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promo_items
    **/
    _count?: true | Promo_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Promo_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Promo_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Promo_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Promo_itemsMaxAggregateInputType
  }

  export type GetPromo_itemsAggregateType<T extends Promo_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo_items[P]>
      : GetScalarType<T[P], AggregatePromo_items[P]>
  }




  export type Promo_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Promo_itemsWhereInput
    orderBy?: Promo_itemsOrderByWithAggregationInput | Promo_itemsOrderByWithAggregationInput[]
    by: Promo_itemsScalarFieldEnum[] | Promo_itemsScalarFieldEnum
    having?: Promo_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Promo_itemsCountAggregateInputType | true
    _avg?: Promo_itemsAvgAggregateInputType
    _sum?: Promo_itemsSumAggregateInputType
    _min?: Promo_itemsMinAggregateInputType
    _max?: Promo_itemsMaxAggregateInputType
  }

  export type Promo_itemsGroupByOutputType = {
    Promo_id: number
    Product_id: number | null
    _count: Promo_itemsCountAggregateOutputType | null
    _avg: Promo_itemsAvgAggregateOutputType | null
    _sum: Promo_itemsSumAggregateOutputType | null
    _min: Promo_itemsMinAggregateOutputType | null
    _max: Promo_itemsMaxAggregateOutputType | null
  }

  type GetPromo_itemsGroupByPayload<T extends Promo_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Promo_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Promo_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Promo_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Promo_itemsGroupByOutputType[P]>
        }
      >
    >


  export type Promo_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Promo_id?: boolean
    Product_id?: boolean
    Discounted?: boolean | Promo_items$DiscountedArgs<ExtArgs>
    Product?: boolean | Promo_items$ProductArgs<ExtArgs>
    Promo?: boolean | PromoDefaultArgs<ExtArgs>
    _count?: boolean | Promo_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promo_items"]>



  export type Promo_itemsSelectScalar = {
    Promo_id?: boolean
    Product_id?: boolean
  }

  export type Promo_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Promo_id" | "Product_id", ExtArgs["result"]["promo_items"]>
  export type Promo_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Discounted?: boolean | Promo_items$DiscountedArgs<ExtArgs>
    Product?: boolean | Promo_items$ProductArgs<ExtArgs>
    Promo?: boolean | PromoDefaultArgs<ExtArgs>
    _count?: boolean | Promo_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Promo_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promo_items"
    objects: {
      Discounted: Prisma.$DiscountedPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs> | null
      Promo: Prisma.$PromoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Promo_id: number
      Product_id: number | null
    }, ExtArgs["result"]["promo_items"]>
    composites: {}
  }

  type Promo_itemsGetPayload<S extends boolean | null | undefined | Promo_itemsDefaultArgs> = $Result.GetResult<Prisma.$Promo_itemsPayload, S>

  type Promo_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Promo_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Promo_itemsCountAggregateInputType | true
    }

  export interface Promo_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promo_items'], meta: { name: 'Promo_items' } }
    /**
     * Find zero or one Promo_items that matches the filter.
     * @param {Promo_itemsFindUniqueArgs} args - Arguments to find a Promo_items
     * @example
     * // Get one Promo_items
     * const promo_items = await prisma.promo_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Promo_itemsFindUniqueArgs>(args: SelectSubset<T, Promo_itemsFindUniqueArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promo_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Promo_itemsFindUniqueOrThrowArgs} args - Arguments to find a Promo_items
     * @example
     * // Get one Promo_items
     * const promo_items = await prisma.promo_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Promo_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, Promo_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsFindFirstArgs} args - Arguments to find a Promo_items
     * @example
     * // Get one Promo_items
     * const promo_items = await prisma.promo_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Promo_itemsFindFirstArgs>(args?: SelectSubset<T, Promo_itemsFindFirstArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsFindFirstOrThrowArgs} args - Arguments to find a Promo_items
     * @example
     * // Get one Promo_items
     * const promo_items = await prisma.promo_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Promo_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, Promo_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promo_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promo_items
     * const promo_items = await prisma.promo_items.findMany()
     * 
     * // Get first 10 Promo_items
     * const promo_items = await prisma.promo_items.findMany({ take: 10 })
     * 
     * // Only select the `Promo_id`
     * const promo_itemsWithPromo_idOnly = await prisma.promo_items.findMany({ select: { Promo_id: true } })
     * 
     */
    findMany<T extends Promo_itemsFindManyArgs>(args?: SelectSubset<T, Promo_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promo_items.
     * @param {Promo_itemsCreateArgs} args - Arguments to create a Promo_items.
     * @example
     * // Create one Promo_items
     * const Promo_items = await prisma.promo_items.create({
     *   data: {
     *     // ... data to create a Promo_items
     *   }
     * })
     * 
     */
    create<T extends Promo_itemsCreateArgs>(args: SelectSubset<T, Promo_itemsCreateArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promo_items.
     * @param {Promo_itemsCreateManyArgs} args - Arguments to create many Promo_items.
     * @example
     * // Create many Promo_items
     * const promo_items = await prisma.promo_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Promo_itemsCreateManyArgs>(args?: SelectSubset<T, Promo_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promo_items.
     * @param {Promo_itemsDeleteArgs} args - Arguments to delete one Promo_items.
     * @example
     * // Delete one Promo_items
     * const Promo_items = await prisma.promo_items.delete({
     *   where: {
     *     // ... filter to delete one Promo_items
     *   }
     * })
     * 
     */
    delete<T extends Promo_itemsDeleteArgs>(args: SelectSubset<T, Promo_itemsDeleteArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promo_items.
     * @param {Promo_itemsUpdateArgs} args - Arguments to update one Promo_items.
     * @example
     * // Update one Promo_items
     * const promo_items = await prisma.promo_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Promo_itemsUpdateArgs>(args: SelectSubset<T, Promo_itemsUpdateArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promo_items.
     * @param {Promo_itemsDeleteManyArgs} args - Arguments to filter Promo_items to delete.
     * @example
     * // Delete a few Promo_items
     * const { count } = await prisma.promo_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Promo_itemsDeleteManyArgs>(args?: SelectSubset<T, Promo_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promo_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promo_items
     * const promo_items = await prisma.promo_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Promo_itemsUpdateManyArgs>(args: SelectSubset<T, Promo_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promo_items.
     * @param {Promo_itemsUpsertArgs} args - Arguments to update or create a Promo_items.
     * @example
     * // Update or create a Promo_items
     * const promo_items = await prisma.promo_items.upsert({
     *   create: {
     *     // ... data to create a Promo_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo_items we want to update
     *   }
     * })
     */
    upsert<T extends Promo_itemsUpsertArgs>(args: SelectSubset<T, Promo_itemsUpsertArgs<ExtArgs>>): Prisma__Promo_itemsClient<$Result.GetResult<Prisma.$Promo_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promo_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsCountArgs} args - Arguments to filter Promo_items to count.
     * @example
     * // Count the number of Promo_items
     * const count = await prisma.promo_items.count({
     *   where: {
     *     // ... the filter for the Promo_items we want to count
     *   }
     * })
    **/
    count<T extends Promo_itemsCountArgs>(
      args?: Subset<T, Promo_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Promo_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Promo_itemsAggregateArgs>(args: Subset<T, Promo_itemsAggregateArgs>): Prisma.PrismaPromise<GetPromo_itemsAggregateType<T>>

    /**
     * Group by Promo_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Promo_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Promo_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Promo_itemsGroupByArgs['orderBy'] }
        : { orderBy?: Promo_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Promo_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromo_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promo_items model
   */
  readonly fields: Promo_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Promo_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Discounted<T extends Promo_items$DiscountedArgs<ExtArgs> = {}>(args?: Subset<T, Promo_items$DiscountedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Product<T extends Promo_items$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Promo_items$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Promo<T extends PromoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromoDefaultArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promo_items model
   */
  interface Promo_itemsFieldRefs {
    readonly Promo_id: FieldRef<"Promo_items", 'Int'>
    readonly Product_id: FieldRef<"Promo_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Promo_items findUnique
   */
  export type Promo_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter, which Promo_items to fetch.
     */
    where: Promo_itemsWhereUniqueInput
  }

  /**
   * Promo_items findUniqueOrThrow
   */
  export type Promo_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter, which Promo_items to fetch.
     */
    where: Promo_itemsWhereUniqueInput
  }

  /**
   * Promo_items findFirst
   */
  export type Promo_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter, which Promo_items to fetch.
     */
    where?: Promo_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promo_items to fetch.
     */
    orderBy?: Promo_itemsOrderByWithRelationInput | Promo_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promo_items.
     */
    cursor?: Promo_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promo_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promo_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promo_items.
     */
    distinct?: Promo_itemsScalarFieldEnum | Promo_itemsScalarFieldEnum[]
  }

  /**
   * Promo_items findFirstOrThrow
   */
  export type Promo_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter, which Promo_items to fetch.
     */
    where?: Promo_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promo_items to fetch.
     */
    orderBy?: Promo_itemsOrderByWithRelationInput | Promo_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promo_items.
     */
    cursor?: Promo_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promo_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promo_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promo_items.
     */
    distinct?: Promo_itemsScalarFieldEnum | Promo_itemsScalarFieldEnum[]
  }

  /**
   * Promo_items findMany
   */
  export type Promo_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter, which Promo_items to fetch.
     */
    where?: Promo_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promo_items to fetch.
     */
    orderBy?: Promo_itemsOrderByWithRelationInput | Promo_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promo_items.
     */
    cursor?: Promo_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promo_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promo_items.
     */
    skip?: number
    distinct?: Promo_itemsScalarFieldEnum | Promo_itemsScalarFieldEnum[]
  }

  /**
   * Promo_items create
   */
  export type Promo_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Promo_items.
     */
    data: XOR<Promo_itemsCreateInput, Promo_itemsUncheckedCreateInput>
  }

  /**
   * Promo_items createMany
   */
  export type Promo_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promo_items.
     */
    data: Promo_itemsCreateManyInput | Promo_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo_items update
   */
  export type Promo_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Promo_items.
     */
    data: XOR<Promo_itemsUpdateInput, Promo_itemsUncheckedUpdateInput>
    /**
     * Choose, which Promo_items to update.
     */
    where: Promo_itemsWhereUniqueInput
  }

  /**
   * Promo_items updateMany
   */
  export type Promo_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promo_items.
     */
    data: XOR<Promo_itemsUpdateManyMutationInput, Promo_itemsUncheckedUpdateManyInput>
    /**
     * Filter which Promo_items to update
     */
    where?: Promo_itemsWhereInput
    /**
     * Limit how many Promo_items to update.
     */
    limit?: number
  }

  /**
   * Promo_items upsert
   */
  export type Promo_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Promo_items to update in case it exists.
     */
    where: Promo_itemsWhereUniqueInput
    /**
     * In case the Promo_items found by the `where` argument doesn't exist, create a new Promo_items with this data.
     */
    create: XOR<Promo_itemsCreateInput, Promo_itemsUncheckedCreateInput>
    /**
     * In case the Promo_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Promo_itemsUpdateInput, Promo_itemsUncheckedUpdateInput>
  }

  /**
   * Promo_items delete
   */
  export type Promo_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
    /**
     * Filter which Promo_items to delete.
     */
    where: Promo_itemsWhereUniqueInput
  }

  /**
   * Promo_items deleteMany
   */
  export type Promo_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo_items to delete
     */
    where?: Promo_itemsWhereInput
    /**
     * Limit how many Promo_items to delete.
     */
    limit?: number
  }

  /**
   * Promo_items.Discounted
   */
  export type Promo_items$DiscountedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discounted
     */
    select?: DiscountedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discounted
     */
    omit?: DiscountedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountedInclude<ExtArgs> | null
    where?: DiscountedWhereInput
    orderBy?: DiscountedOrderByWithRelationInput | DiscountedOrderByWithRelationInput[]
    cursor?: DiscountedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountedScalarFieldEnum | DiscountedScalarFieldEnum[]
  }

  /**
   * Promo_items.Product
   */
  export type Promo_items$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Promo_items without action
   */
  export type Promo_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo_items
     */
    select?: Promo_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo_items
     */
    omit?: Promo_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Promo_itemsInclude<ExtArgs> | null
  }


  /**
   * Model Shipping_Table
   */

  export type AggregateShipping_Table = {
    _count: Shipping_TableCountAggregateOutputType | null
    _avg: Shipping_TableAvgAggregateOutputType | null
    _sum: Shipping_TableSumAggregateOutputType | null
    _min: Shipping_TableMinAggregateOutputType | null
    _max: Shipping_TableMaxAggregateOutputType | null
  }

  export type Shipping_TableAvgAggregateOutputType = {
    Shipping_ID: number | null
    Order_id: number | null
  }

  export type Shipping_TableSumAggregateOutputType = {
    Shipping_ID: number | null
    Order_id: number | null
  }

  export type Shipping_TableMinAggregateOutputType = {
    Shipping_ID: number | null
    Order_id: number | null
    Tracking_no: string | null
  }

  export type Shipping_TableMaxAggregateOutputType = {
    Shipping_ID: number | null
    Order_id: number | null
    Tracking_no: string | null
  }

  export type Shipping_TableCountAggregateOutputType = {
    Shipping_ID: number
    Order_id: number
    Tracking_no: number
    _all: number
  }


  export type Shipping_TableAvgAggregateInputType = {
    Shipping_ID?: true
    Order_id?: true
  }

  export type Shipping_TableSumAggregateInputType = {
    Shipping_ID?: true
    Order_id?: true
  }

  export type Shipping_TableMinAggregateInputType = {
    Shipping_ID?: true
    Order_id?: true
    Tracking_no?: true
  }

  export type Shipping_TableMaxAggregateInputType = {
    Shipping_ID?: true
    Order_id?: true
    Tracking_no?: true
  }

  export type Shipping_TableCountAggregateInputType = {
    Shipping_ID?: true
    Order_id?: true
    Tracking_no?: true
    _all?: true
  }

  export type Shipping_TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipping_Table to aggregate.
     */
    where?: Shipping_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipping_Tables to fetch.
     */
    orderBy?: Shipping_TableOrderByWithRelationInput | Shipping_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shipping_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipping_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipping_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipping_Tables
    **/
    _count?: true | Shipping_TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shipping_TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shipping_TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shipping_TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shipping_TableMaxAggregateInputType
  }

  export type GetShipping_TableAggregateType<T extends Shipping_TableAggregateArgs> = {
        [P in keyof T & keyof AggregateShipping_Table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipping_Table[P]>
      : GetScalarType<T[P], AggregateShipping_Table[P]>
  }




  export type Shipping_TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shipping_TableWhereInput
    orderBy?: Shipping_TableOrderByWithAggregationInput | Shipping_TableOrderByWithAggregationInput[]
    by: Shipping_TableScalarFieldEnum[] | Shipping_TableScalarFieldEnum
    having?: Shipping_TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shipping_TableCountAggregateInputType | true
    _avg?: Shipping_TableAvgAggregateInputType
    _sum?: Shipping_TableSumAggregateInputType
    _min?: Shipping_TableMinAggregateInputType
    _max?: Shipping_TableMaxAggregateInputType
  }

  export type Shipping_TableGroupByOutputType = {
    Shipping_ID: number
    Order_id: number | null
    Tracking_no: string
    _count: Shipping_TableCountAggregateOutputType | null
    _avg: Shipping_TableAvgAggregateOutputType | null
    _sum: Shipping_TableSumAggregateOutputType | null
    _min: Shipping_TableMinAggregateOutputType | null
    _max: Shipping_TableMaxAggregateOutputType | null
  }

  type GetShipping_TableGroupByPayload<T extends Shipping_TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shipping_TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shipping_TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shipping_TableGroupByOutputType[P]>
            : GetScalarType<T[P], Shipping_TableGroupByOutputType[P]>
        }
      >
    >


  export type Shipping_TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Shipping_ID?: boolean
    Order_id?: boolean
    Tracking_no?: boolean
    Orders?: boolean | Shipping_Table$OrdersArgs<ExtArgs>
  }, ExtArgs["result"]["shipping_Table"]>



  export type Shipping_TableSelectScalar = {
    Shipping_ID?: boolean
    Order_id?: boolean
    Tracking_no?: boolean
  }

  export type Shipping_TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Shipping_ID" | "Order_id" | "Tracking_no", ExtArgs["result"]["shipping_Table"]>
  export type Shipping_TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | Shipping_Table$OrdersArgs<ExtArgs>
  }

  export type $Shipping_TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipping_Table"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Shipping_ID: number
      Order_id: number | null
      Tracking_no: string
    }, ExtArgs["result"]["shipping_Table"]>
    composites: {}
  }

  type Shipping_TableGetPayload<S extends boolean | null | undefined | Shipping_TableDefaultArgs> = $Result.GetResult<Prisma.$Shipping_TablePayload, S>

  type Shipping_TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shipping_TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shipping_TableCountAggregateInputType | true
    }

  export interface Shipping_TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipping_Table'], meta: { name: 'Shipping_Table' } }
    /**
     * Find zero or one Shipping_Table that matches the filter.
     * @param {Shipping_TableFindUniqueArgs} args - Arguments to find a Shipping_Table
     * @example
     * // Get one Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shipping_TableFindUniqueArgs>(args: SelectSubset<T, Shipping_TableFindUniqueArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipping_Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shipping_TableFindUniqueOrThrowArgs} args - Arguments to find a Shipping_Table
     * @example
     * // Get one Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shipping_TableFindUniqueOrThrowArgs>(args: SelectSubset<T, Shipping_TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping_Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableFindFirstArgs} args - Arguments to find a Shipping_Table
     * @example
     * // Get one Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shipping_TableFindFirstArgs>(args?: SelectSubset<T, Shipping_TableFindFirstArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping_Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableFindFirstOrThrowArgs} args - Arguments to find a Shipping_Table
     * @example
     * // Get one Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shipping_TableFindFirstOrThrowArgs>(args?: SelectSubset<T, Shipping_TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipping_Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipping_Tables
     * const shipping_Tables = await prisma.shipping_Table.findMany()
     * 
     * // Get first 10 Shipping_Tables
     * const shipping_Tables = await prisma.shipping_Table.findMany({ take: 10 })
     * 
     * // Only select the `Shipping_ID`
     * const shipping_TableWithShipping_IDOnly = await prisma.shipping_Table.findMany({ select: { Shipping_ID: true } })
     * 
     */
    findMany<T extends Shipping_TableFindManyArgs>(args?: SelectSubset<T, Shipping_TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipping_Table.
     * @param {Shipping_TableCreateArgs} args - Arguments to create a Shipping_Table.
     * @example
     * // Create one Shipping_Table
     * const Shipping_Table = await prisma.shipping_Table.create({
     *   data: {
     *     // ... data to create a Shipping_Table
     *   }
     * })
     * 
     */
    create<T extends Shipping_TableCreateArgs>(args: SelectSubset<T, Shipping_TableCreateArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipping_Tables.
     * @param {Shipping_TableCreateManyArgs} args - Arguments to create many Shipping_Tables.
     * @example
     * // Create many Shipping_Tables
     * const shipping_Table = await prisma.shipping_Table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shipping_TableCreateManyArgs>(args?: SelectSubset<T, Shipping_TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shipping_Table.
     * @param {Shipping_TableDeleteArgs} args - Arguments to delete one Shipping_Table.
     * @example
     * // Delete one Shipping_Table
     * const Shipping_Table = await prisma.shipping_Table.delete({
     *   where: {
     *     // ... filter to delete one Shipping_Table
     *   }
     * })
     * 
     */
    delete<T extends Shipping_TableDeleteArgs>(args: SelectSubset<T, Shipping_TableDeleteArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipping_Table.
     * @param {Shipping_TableUpdateArgs} args - Arguments to update one Shipping_Table.
     * @example
     * // Update one Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shipping_TableUpdateArgs>(args: SelectSubset<T, Shipping_TableUpdateArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipping_Tables.
     * @param {Shipping_TableDeleteManyArgs} args - Arguments to filter Shipping_Tables to delete.
     * @example
     * // Delete a few Shipping_Tables
     * const { count } = await prisma.shipping_Table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shipping_TableDeleteManyArgs>(args?: SelectSubset<T, Shipping_TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipping_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipping_Tables
     * const shipping_Table = await prisma.shipping_Table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shipping_TableUpdateManyArgs>(args: SelectSubset<T, Shipping_TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipping_Table.
     * @param {Shipping_TableUpsertArgs} args - Arguments to update or create a Shipping_Table.
     * @example
     * // Update or create a Shipping_Table
     * const shipping_Table = await prisma.shipping_Table.upsert({
     *   create: {
     *     // ... data to create a Shipping_Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipping_Table we want to update
     *   }
     * })
     */
    upsert<T extends Shipping_TableUpsertArgs>(args: SelectSubset<T, Shipping_TableUpsertArgs<ExtArgs>>): Prisma__Shipping_TableClient<$Result.GetResult<Prisma.$Shipping_TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipping_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableCountArgs} args - Arguments to filter Shipping_Tables to count.
     * @example
     * // Count the number of Shipping_Tables
     * const count = await prisma.shipping_Table.count({
     *   where: {
     *     // ... the filter for the Shipping_Tables we want to count
     *   }
     * })
    **/
    count<T extends Shipping_TableCountArgs>(
      args?: Subset<T, Shipping_TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shipping_TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipping_Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shipping_TableAggregateArgs>(args: Subset<T, Shipping_TableAggregateArgs>): Prisma.PrismaPromise<GetShipping_TableAggregateType<T>>

    /**
     * Group by Shipping_Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipping_TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shipping_TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shipping_TableGroupByArgs['orderBy'] }
        : { orderBy?: Shipping_TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shipping_TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipping_TableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipping_Table model
   */
  readonly fields: Shipping_TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipping_Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shipping_TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends Shipping_Table$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Shipping_Table$OrdersArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipping_Table model
   */
  interface Shipping_TableFieldRefs {
    readonly Shipping_ID: FieldRef<"Shipping_Table", 'Int'>
    readonly Order_id: FieldRef<"Shipping_Table", 'Int'>
    readonly Tracking_no: FieldRef<"Shipping_Table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipping_Table findUnique
   */
  export type Shipping_TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter, which Shipping_Table to fetch.
     */
    where: Shipping_TableWhereUniqueInput
  }

  /**
   * Shipping_Table findUniqueOrThrow
   */
  export type Shipping_TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter, which Shipping_Table to fetch.
     */
    where: Shipping_TableWhereUniqueInput
  }

  /**
   * Shipping_Table findFirst
   */
  export type Shipping_TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter, which Shipping_Table to fetch.
     */
    where?: Shipping_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipping_Tables to fetch.
     */
    orderBy?: Shipping_TableOrderByWithRelationInput | Shipping_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipping_Tables.
     */
    cursor?: Shipping_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipping_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipping_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipping_Tables.
     */
    distinct?: Shipping_TableScalarFieldEnum | Shipping_TableScalarFieldEnum[]
  }

  /**
   * Shipping_Table findFirstOrThrow
   */
  export type Shipping_TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter, which Shipping_Table to fetch.
     */
    where?: Shipping_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipping_Tables to fetch.
     */
    orderBy?: Shipping_TableOrderByWithRelationInput | Shipping_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipping_Tables.
     */
    cursor?: Shipping_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipping_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipping_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipping_Tables.
     */
    distinct?: Shipping_TableScalarFieldEnum | Shipping_TableScalarFieldEnum[]
  }

  /**
   * Shipping_Table findMany
   */
  export type Shipping_TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter, which Shipping_Tables to fetch.
     */
    where?: Shipping_TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipping_Tables to fetch.
     */
    orderBy?: Shipping_TableOrderByWithRelationInput | Shipping_TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipping_Tables.
     */
    cursor?: Shipping_TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipping_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipping_Tables.
     */
    skip?: number
    distinct?: Shipping_TableScalarFieldEnum | Shipping_TableScalarFieldEnum[]
  }

  /**
   * Shipping_Table create
   */
  export type Shipping_TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipping_Table.
     */
    data: XOR<Shipping_TableCreateInput, Shipping_TableUncheckedCreateInput>
  }

  /**
   * Shipping_Table createMany
   */
  export type Shipping_TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipping_Tables.
     */
    data: Shipping_TableCreateManyInput | Shipping_TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipping_Table update
   */
  export type Shipping_TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipping_Table.
     */
    data: XOR<Shipping_TableUpdateInput, Shipping_TableUncheckedUpdateInput>
    /**
     * Choose, which Shipping_Table to update.
     */
    where: Shipping_TableWhereUniqueInput
  }

  /**
   * Shipping_Table updateMany
   */
  export type Shipping_TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipping_Tables.
     */
    data: XOR<Shipping_TableUpdateManyMutationInput, Shipping_TableUncheckedUpdateManyInput>
    /**
     * Filter which Shipping_Tables to update
     */
    where?: Shipping_TableWhereInput
    /**
     * Limit how many Shipping_Tables to update.
     */
    limit?: number
  }

  /**
   * Shipping_Table upsert
   */
  export type Shipping_TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipping_Table to update in case it exists.
     */
    where: Shipping_TableWhereUniqueInput
    /**
     * In case the Shipping_Table found by the `where` argument doesn't exist, create a new Shipping_Table with this data.
     */
    create: XOR<Shipping_TableCreateInput, Shipping_TableUncheckedCreateInput>
    /**
     * In case the Shipping_Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shipping_TableUpdateInput, Shipping_TableUncheckedUpdateInput>
  }

  /**
   * Shipping_Table delete
   */
  export type Shipping_TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
    /**
     * Filter which Shipping_Table to delete.
     */
    where: Shipping_TableWhereUniqueInput
  }

  /**
   * Shipping_Table deleteMany
   */
  export type Shipping_TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipping_Tables to delete
     */
    where?: Shipping_TableWhereInput
    /**
     * Limit how many Shipping_Tables to delete.
     */
    limit?: number
  }

  /**
   * Shipping_Table.Orders
   */
  export type Shipping_Table$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }

  /**
   * Shipping_Table without action
   */
  export type Shipping_TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping_Table
     */
    select?: Shipping_TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping_Table
     */
    omit?: Shipping_TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipping_TableInclude<ExtArgs> | null
  }


  /**
   * Model User_Notifications
   */

  export type AggregateUser_Notifications = {
    _count: User_NotificationsCountAggregateOutputType | null
    _avg: User_NotificationsAvgAggregateOutputType | null
    _sum: User_NotificationsSumAggregateOutputType | null
    _min: User_NotificationsMinAggregateOutputType | null
    _max: User_NotificationsMaxAggregateOutputType | null
  }

  export type User_NotificationsAvgAggregateOutputType = {
    Notif_id: number | null
    User_ID: number | null
  }

  export type User_NotificationsSumAggregateOutputType = {
    Notif_id: number | null
    User_ID: number | null
  }

  export type User_NotificationsMinAggregateOutputType = {
    Notif_id: number | null
    User_ID: number | null
    Message: string | null
  }

  export type User_NotificationsMaxAggregateOutputType = {
    Notif_id: number | null
    User_ID: number | null
    Message: string | null
  }

  export type User_NotificationsCountAggregateOutputType = {
    Notif_id: number
    User_ID: number
    Message: number
    _all: number
  }


  export type User_NotificationsAvgAggregateInputType = {
    Notif_id?: true
    User_ID?: true
  }

  export type User_NotificationsSumAggregateInputType = {
    Notif_id?: true
    User_ID?: true
  }

  export type User_NotificationsMinAggregateInputType = {
    Notif_id?: true
    User_ID?: true
    Message?: true
  }

  export type User_NotificationsMaxAggregateInputType = {
    Notif_id?: true
    User_ID?: true
    Message?: true
  }

  export type User_NotificationsCountAggregateInputType = {
    Notif_id?: true
    User_ID?: true
    Message?: true
    _all?: true
  }

  export type User_NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Notifications to aggregate.
     */
    where?: User_NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Notifications to fetch.
     */
    orderBy?: User_NotificationsOrderByWithRelationInput | User_NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Notifications
    **/
    _count?: true | User_NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_NotificationsMaxAggregateInputType
  }

  export type GetUser_NotificationsAggregateType<T extends User_NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Notifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Notifications[P]>
      : GetScalarType<T[P], AggregateUser_Notifications[P]>
  }




  export type User_NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_NotificationsWhereInput
    orderBy?: User_NotificationsOrderByWithAggregationInput | User_NotificationsOrderByWithAggregationInput[]
    by: User_NotificationsScalarFieldEnum[] | User_NotificationsScalarFieldEnum
    having?: User_NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_NotificationsCountAggregateInputType | true
    _avg?: User_NotificationsAvgAggregateInputType
    _sum?: User_NotificationsSumAggregateInputType
    _min?: User_NotificationsMinAggregateInputType
    _max?: User_NotificationsMaxAggregateInputType
  }

  export type User_NotificationsGroupByOutputType = {
    Notif_id: number
    User_ID: number | null
    Message: string
    _count: User_NotificationsCountAggregateOutputType | null
    _avg: User_NotificationsAvgAggregateOutputType | null
    _sum: User_NotificationsSumAggregateOutputType | null
    _min: User_NotificationsMinAggregateOutputType | null
    _max: User_NotificationsMaxAggregateOutputType | null
  }

  type GetUser_NotificationsGroupByPayload<T extends User_NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], User_NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type User_NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Notif_id?: boolean
    User_ID?: boolean
    Message?: boolean
    Users?: boolean | User_Notifications$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["user_Notifications"]>



  export type User_NotificationsSelectScalar = {
    Notif_id?: boolean
    User_ID?: boolean
    Message?: boolean
  }

  export type User_NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Notif_id" | "User_ID" | "Message", ExtArgs["result"]["user_Notifications"]>
  export type User_NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | User_Notifications$UsersArgs<ExtArgs>
  }

  export type $User_NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Notifications"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Notif_id: number
      User_ID: number | null
      Message: string
    }, ExtArgs["result"]["user_Notifications"]>
    composites: {}
  }

  type User_NotificationsGetPayload<S extends boolean | null | undefined | User_NotificationsDefaultArgs> = $Result.GetResult<Prisma.$User_NotificationsPayload, S>

  type User_NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_NotificationsCountAggregateInputType | true
    }

  export interface User_NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Notifications'], meta: { name: 'User_Notifications' } }
    /**
     * Find zero or one User_Notifications that matches the filter.
     * @param {User_NotificationsFindUniqueArgs} args - Arguments to find a User_Notifications
     * @example
     * // Get one User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_NotificationsFindUniqueArgs>(args: SelectSubset<T, User_NotificationsFindUniqueArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_NotificationsFindUniqueOrThrowArgs} args - Arguments to find a User_Notifications
     * @example
     * // Get one User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, User_NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsFindFirstArgs} args - Arguments to find a User_Notifications
     * @example
     * // Get one User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_NotificationsFindFirstArgs>(args?: SelectSubset<T, User_NotificationsFindFirstArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsFindFirstOrThrowArgs} args - Arguments to find a User_Notifications
     * @example
     * // Get one User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, User_NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findMany()
     * 
     * // Get first 10 User_Notifications
     * const user_Notifications = await prisma.user_Notifications.findMany({ take: 10 })
     * 
     * // Only select the `Notif_id`
     * const user_NotificationsWithNotif_idOnly = await prisma.user_Notifications.findMany({ select: { Notif_id: true } })
     * 
     */
    findMany<T extends User_NotificationsFindManyArgs>(args?: SelectSubset<T, User_NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_Notifications.
     * @param {User_NotificationsCreateArgs} args - Arguments to create a User_Notifications.
     * @example
     * // Create one User_Notifications
     * const User_Notifications = await prisma.user_Notifications.create({
     *   data: {
     *     // ... data to create a User_Notifications
     *   }
     * })
     * 
     */
    create<T extends User_NotificationsCreateArgs>(args: SelectSubset<T, User_NotificationsCreateArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_Notifications.
     * @param {User_NotificationsCreateManyArgs} args - Arguments to create many User_Notifications.
     * @example
     * // Create many User_Notifications
     * const user_Notifications = await prisma.user_Notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_NotificationsCreateManyArgs>(args?: SelectSubset<T, User_NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Notifications.
     * @param {User_NotificationsDeleteArgs} args - Arguments to delete one User_Notifications.
     * @example
     * // Delete one User_Notifications
     * const User_Notifications = await prisma.user_Notifications.delete({
     *   where: {
     *     // ... filter to delete one User_Notifications
     *   }
     * })
     * 
     */
    delete<T extends User_NotificationsDeleteArgs>(args: SelectSubset<T, User_NotificationsDeleteArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_Notifications.
     * @param {User_NotificationsUpdateArgs} args - Arguments to update one User_Notifications.
     * @example
     * // Update one User_Notifications
     * const user_Notifications = await prisma.user_Notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_NotificationsUpdateArgs>(args: SelectSubset<T, User_NotificationsUpdateArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_Notifications.
     * @param {User_NotificationsDeleteManyArgs} args - Arguments to filter User_Notifications to delete.
     * @example
     * // Delete a few User_Notifications
     * const { count } = await prisma.user_Notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_NotificationsDeleteManyArgs>(args?: SelectSubset<T, User_NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Notifications
     * const user_Notifications = await prisma.user_Notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_NotificationsUpdateManyArgs>(args: SelectSubset<T, User_NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Notifications.
     * @param {User_NotificationsUpsertArgs} args - Arguments to update or create a User_Notifications.
     * @example
     * // Update or create a User_Notifications
     * const user_Notifications = await prisma.user_Notifications.upsert({
     *   create: {
     *     // ... data to create a User_Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Notifications we want to update
     *   }
     * })
     */
    upsert<T extends User_NotificationsUpsertArgs>(args: SelectSubset<T, User_NotificationsUpsertArgs<ExtArgs>>): Prisma__User_NotificationsClient<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsCountArgs} args - Arguments to filter User_Notifications to count.
     * @example
     * // Count the number of User_Notifications
     * const count = await prisma.user_Notifications.count({
     *   where: {
     *     // ... the filter for the User_Notifications we want to count
     *   }
     * })
    **/
    count<T extends User_NotificationsCountArgs>(
      args?: Subset<T, User_NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_NotificationsAggregateArgs>(args: Subset<T, User_NotificationsAggregateArgs>): Prisma.PrismaPromise<GetUser_NotificationsAggregateType<T>>

    /**
     * Group by User_Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: User_NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_NotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Notifications model
   */
  readonly fields: User_NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends User_Notifications$UsersArgs<ExtArgs> = {}>(args?: Subset<T, User_Notifications$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Notifications model
   */
  interface User_NotificationsFieldRefs {
    readonly Notif_id: FieldRef<"User_Notifications", 'Int'>
    readonly User_ID: FieldRef<"User_Notifications", 'Int'>
    readonly Message: FieldRef<"User_Notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_Notifications findUnique
   */
  export type User_NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which User_Notifications to fetch.
     */
    where: User_NotificationsWhereUniqueInput
  }

  /**
   * User_Notifications findUniqueOrThrow
   */
  export type User_NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which User_Notifications to fetch.
     */
    where: User_NotificationsWhereUniqueInput
  }

  /**
   * User_Notifications findFirst
   */
  export type User_NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which User_Notifications to fetch.
     */
    where?: User_NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Notifications to fetch.
     */
    orderBy?: User_NotificationsOrderByWithRelationInput | User_NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Notifications.
     */
    cursor?: User_NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Notifications.
     */
    distinct?: User_NotificationsScalarFieldEnum | User_NotificationsScalarFieldEnum[]
  }

  /**
   * User_Notifications findFirstOrThrow
   */
  export type User_NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which User_Notifications to fetch.
     */
    where?: User_NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Notifications to fetch.
     */
    orderBy?: User_NotificationsOrderByWithRelationInput | User_NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Notifications.
     */
    cursor?: User_NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Notifications.
     */
    distinct?: User_NotificationsScalarFieldEnum | User_NotificationsScalarFieldEnum[]
  }

  /**
   * User_Notifications findMany
   */
  export type User_NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which User_Notifications to fetch.
     */
    where?: User_NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Notifications to fetch.
     */
    orderBy?: User_NotificationsOrderByWithRelationInput | User_NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Notifications.
     */
    cursor?: User_NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Notifications.
     */
    skip?: number
    distinct?: User_NotificationsScalarFieldEnum | User_NotificationsScalarFieldEnum[]
  }

  /**
   * User_Notifications create
   */
  export type User_NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Notifications.
     */
    data: XOR<User_NotificationsCreateInput, User_NotificationsUncheckedCreateInput>
  }

  /**
   * User_Notifications createMany
   */
  export type User_NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Notifications.
     */
    data: User_NotificationsCreateManyInput | User_NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_Notifications update
   */
  export type User_NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Notifications.
     */
    data: XOR<User_NotificationsUpdateInput, User_NotificationsUncheckedUpdateInput>
    /**
     * Choose, which User_Notifications to update.
     */
    where: User_NotificationsWhereUniqueInput
  }

  /**
   * User_Notifications updateMany
   */
  export type User_NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Notifications.
     */
    data: XOR<User_NotificationsUpdateManyMutationInput, User_NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which User_Notifications to update
     */
    where?: User_NotificationsWhereInput
    /**
     * Limit how many User_Notifications to update.
     */
    limit?: number
  }

  /**
   * User_Notifications upsert
   */
  export type User_NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Notifications to update in case it exists.
     */
    where: User_NotificationsWhereUniqueInput
    /**
     * In case the User_Notifications found by the `where` argument doesn't exist, create a new User_Notifications with this data.
     */
    create: XOR<User_NotificationsCreateInput, User_NotificationsUncheckedCreateInput>
    /**
     * In case the User_Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_NotificationsUpdateInput, User_NotificationsUncheckedUpdateInput>
  }

  /**
   * User_Notifications delete
   */
  export type User_NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    /**
     * Filter which User_Notifications to delete.
     */
    where: User_NotificationsWhereUniqueInput
  }

  /**
   * User_Notifications deleteMany
   */
  export type User_NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Notifications to delete
     */
    where?: User_NotificationsWhereInput
    /**
     * Limit how many User_Notifications to delete.
     */
    limit?: number
  }

  /**
   * User_Notifications.Users
   */
  export type User_Notifications$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * User_Notifications without action
   */
  export type User_NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    User_ID: number | null
    ZipCode: number | null
  }

  export type UsersSumAggregateOutputType = {
    User_ID: number | null
    ZipCode: number | null
  }

  export type UsersMinAggregateOutputType = {
    User_ID: number | null
    User_img_uri: string | null
    Username: string | null
    FirstName: string | null
    LastName: string | null
    Address: string | null
    City: string | null
    State: string | null
    ZipCode: number | null
    Password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    User_ID: number | null
    User_img_uri: string | null
    Username: string | null
    FirstName: string | null
    LastName: string | null
    Address: string | null
    City: string | null
    State: string | null
    ZipCode: number | null
    Password: string | null
  }

  export type UsersCountAggregateOutputType = {
    User_ID: number
    User_img_uri: number
    Username: number
    FirstName: number
    LastName: number
    Address: number
    City: number
    State: number
    ZipCode: number
    Password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    User_ID?: true
    ZipCode?: true
  }

  export type UsersSumAggregateInputType = {
    User_ID?: true
    ZipCode?: true
  }

  export type UsersMinAggregateInputType = {
    User_ID?: true
    User_img_uri?: true
    Username?: true
    FirstName?: true
    LastName?: true
    Address?: true
    City?: true
    State?: true
    ZipCode?: true
    Password?: true
  }

  export type UsersMaxAggregateInputType = {
    User_ID?: true
    User_img_uri?: true
    Username?: true
    FirstName?: true
    LastName?: true
    Address?: true
    City?: true
    State?: true
    ZipCode?: true
    Password?: true
  }

  export type UsersCountAggregateInputType = {
    User_ID?: true
    User_img_uri?: true
    Username?: true
    FirstName?: true
    LastName?: true
    Address?: true
    City?: true
    State?: true
    ZipCode?: true
    Password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    User_ID: number
    User_img_uri: string | null
    Username: string
    FirstName: string
    LastName: string
    Address: string | null
    City: string | null
    State: string | null
    ZipCode: number | null
    Password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    User_img_uri?: boolean
    Username?: boolean
    FirstName?: boolean
    LastName?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    ZipCode?: boolean
    Password?: boolean
    Employee_s?: boolean | Users$Employee_sArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    User_Notifications?: boolean | Users$User_NotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    User_ID?: boolean
    User_img_uri?: boolean
    Username?: boolean
    FirstName?: boolean
    LastName?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    ZipCode?: boolean
    Password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"User_ID" | "User_img_uri" | "Username" | "FirstName" | "LastName" | "Address" | "City" | "State" | "ZipCode" | "Password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee_s?: boolean | Users$Employee_sArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    User_Notifications?: boolean | Users$User_NotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Employee_s: Prisma.$Employee_sPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      User_Notifications: Prisma.$User_NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      User_ID: number
      User_img_uri: string | null
      Username: string
      FirstName: string
      LastName: string
      Address: string | null
      City: string | null
      State: string | null
      ZipCode: number | null
      Password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `User_ID`
     * const usersWithUser_IDOnly = await prisma.users.findMany({ select: { User_ID: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee_s<T extends Users$Employee_sArgs<ExtArgs> = {}>(args?: Subset<T, Users$Employee_sArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Employee_sPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User_Notifications<T extends Users$User_NotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$User_NotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly User_ID: FieldRef<"Users", 'Int'>
    readonly User_img_uri: FieldRef<"Users", 'String'>
    readonly Username: FieldRef<"Users", 'String'>
    readonly FirstName: FieldRef<"Users", 'String'>
    readonly LastName: FieldRef<"Users", 'String'>
    readonly Address: FieldRef<"Users", 'String'>
    readonly City: FieldRef<"Users", 'String'>
    readonly State: FieldRef<"Users", 'String'>
    readonly ZipCode: FieldRef<"Users", 'Int'>
    readonly Password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Employee_s
   */
  export type Users$Employee_sArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee_s
     */
    select?: Employee_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee_s
     */
    omit?: Employee_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Employee_sInclude<ExtArgs> | null
    where?: Employee_sWhereInput
    orderBy?: Employee_sOrderByWithRelationInput | Employee_sOrderByWithRelationInput[]
    cursor?: Employee_sWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Employee_sScalarFieldEnum | Employee_sScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.User_Notifications
   */
  export type Users$User_NotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Notifications
     */
    select?: User_NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Notifications
     */
    omit?: User_NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_NotificationsInclude<ExtArgs> | null
    where?: User_NotificationsWhereInput
    orderBy?: User_NotificationsOrderByWithRelationInput | User_NotificationsOrderByWithRelationInput[]
    cursor?: User_NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_NotificationsScalarFieldEnum | User_NotificationsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DiscountedScalarFieldEnum: {
    id: 'id',
    Order_item_id: 'Order_item_id',
    Promo_Id: 'Promo_Id',
    Amount: 'Amount'
  };

  export type DiscountedScalarFieldEnum = (typeof DiscountedScalarFieldEnum)[keyof typeof DiscountedScalarFieldEnum]


  export const Employee_sScalarFieldEnum: {
    Employee_Id: 'Employee_Id',
    role: 'role',
    User_Id: 'User_Id'
  };

  export type Employee_sScalarFieldEnum = (typeof Employee_sScalarFieldEnum)[keyof typeof Employee_sScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    Order_Items_Id: 'Order_Items_Id',
    Order_Id: 'Order_Id',
    Product_Id: 'Product_Id'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    Order_Id: 'Order_Id',
    Order_Date: 'Order_Date',
    Order_Time: 'Order_Time',
    User_ID: 'User_ID',
    Total: 'Total'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    Product_Id: 'Product_Id',
    Product_Name: 'Product_Name',
    Product_Description: 'Product_Description',
    Product_Price: 'Product_Price',
    Product_Quatity: 'Product_Quatity',
    Product_img_uri: 'Product_img_uri'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PromoScalarFieldEnum: {
    Id: 'Id',
    promo_name: 'promo_name',
    Discount_Percent: 'Discount_Percent',
    Start_Date: 'Start_Date',
    End_Date: 'End_Date'
  };

  export type PromoScalarFieldEnum = (typeof PromoScalarFieldEnum)[keyof typeof PromoScalarFieldEnum]


  export const Promo_itemsScalarFieldEnum: {
    Promo_id: 'Promo_id',
    Product_id: 'Product_id'
  };

  export type Promo_itemsScalarFieldEnum = (typeof Promo_itemsScalarFieldEnum)[keyof typeof Promo_itemsScalarFieldEnum]


  export const Shipping_TableScalarFieldEnum: {
    Shipping_ID: 'Shipping_ID',
    Order_id: 'Order_id',
    Tracking_no: 'Tracking_no'
  };

  export type Shipping_TableScalarFieldEnum = (typeof Shipping_TableScalarFieldEnum)[keyof typeof Shipping_TableScalarFieldEnum]


  export const User_NotificationsScalarFieldEnum: {
    Notif_id: 'Notif_id',
    User_ID: 'User_ID',
    Message: 'Message'
  };

  export type User_NotificationsScalarFieldEnum = (typeof User_NotificationsScalarFieldEnum)[keyof typeof User_NotificationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    User_ID: 'User_ID',
    User_img_uri: 'User_img_uri',
    Username: 'Username',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Address: 'Address',
    City: 'City',
    State: 'State',
    ZipCode: 'ZipCode',
    Password: 'Password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const Employee_sOrderByRelevanceFieldEnum: {
    role: 'role'
  };

  export type Employee_sOrderByRelevanceFieldEnum = (typeof Employee_sOrderByRelevanceFieldEnum)[keyof typeof Employee_sOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    Product_Name: 'Product_Name',
    Product_Description: 'Product_Description',
    Product_img_uri: 'Product_img_uri'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const PromoOrderByRelevanceFieldEnum: {
    promo_name: 'promo_name'
  };

  export type PromoOrderByRelevanceFieldEnum = (typeof PromoOrderByRelevanceFieldEnum)[keyof typeof PromoOrderByRelevanceFieldEnum]


  export const Shipping_TableOrderByRelevanceFieldEnum: {
    Tracking_no: 'Tracking_no'
  };

  export type Shipping_TableOrderByRelevanceFieldEnum = (typeof Shipping_TableOrderByRelevanceFieldEnum)[keyof typeof Shipping_TableOrderByRelevanceFieldEnum]


  export const User_NotificationsOrderByRelevanceFieldEnum: {
    Message: 'Message'
  };

  export type User_NotificationsOrderByRelevanceFieldEnum = (typeof User_NotificationsOrderByRelevanceFieldEnum)[keyof typeof User_NotificationsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    User_img_uri: 'User_img_uri',
    Username: 'Username',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Address: 'Address',
    City: 'City',
    State: 'State',
    Password: 'Password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DiscountedWhereInput = {
    AND?: DiscountedWhereInput | DiscountedWhereInput[]
    OR?: DiscountedWhereInput[]
    NOT?: DiscountedWhereInput | DiscountedWhereInput[]
    id?: IntFilter<"Discounted"> | number
    Order_item_id?: IntNullableFilter<"Discounted"> | number | null
    Promo_Id?: IntNullableFilter<"Discounted"> | number | null
    Amount?: IntFilter<"Discounted"> | number
    OrderItems?: XOR<OrderItemsNullableScalarRelationFilter, OrderItemsWhereInput> | null
    Promo_items?: XOR<Promo_itemsNullableScalarRelationFilter, Promo_itemsWhereInput> | null
  }

  export type DiscountedOrderByWithRelationInput = {
    id?: SortOrder
    Order_item_id?: SortOrderInput | SortOrder
    Promo_Id?: SortOrderInput | SortOrder
    Amount?: SortOrder
    OrderItems?: OrderItemsOrderByWithRelationInput
    Promo_items?: Promo_itemsOrderByWithRelationInput
  }

  export type DiscountedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiscountedWhereInput | DiscountedWhereInput[]
    OR?: DiscountedWhereInput[]
    NOT?: DiscountedWhereInput | DiscountedWhereInput[]
    Order_item_id?: IntNullableFilter<"Discounted"> | number | null
    Promo_Id?: IntNullableFilter<"Discounted"> | number | null
    Amount?: IntFilter<"Discounted"> | number
    OrderItems?: XOR<OrderItemsNullableScalarRelationFilter, OrderItemsWhereInput> | null
    Promo_items?: XOR<Promo_itemsNullableScalarRelationFilter, Promo_itemsWhereInput> | null
  }, "id">

  export type DiscountedOrderByWithAggregationInput = {
    id?: SortOrder
    Order_item_id?: SortOrderInput | SortOrder
    Promo_Id?: SortOrderInput | SortOrder
    Amount?: SortOrder
    _count?: DiscountedCountOrderByAggregateInput
    _avg?: DiscountedAvgOrderByAggregateInput
    _max?: DiscountedMaxOrderByAggregateInput
    _min?: DiscountedMinOrderByAggregateInput
    _sum?: DiscountedSumOrderByAggregateInput
  }

  export type DiscountedScalarWhereWithAggregatesInput = {
    AND?: DiscountedScalarWhereWithAggregatesInput | DiscountedScalarWhereWithAggregatesInput[]
    OR?: DiscountedScalarWhereWithAggregatesInput[]
    NOT?: DiscountedScalarWhereWithAggregatesInput | DiscountedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discounted"> | number
    Order_item_id?: IntNullableWithAggregatesFilter<"Discounted"> | number | null
    Promo_Id?: IntNullableWithAggregatesFilter<"Discounted"> | number | null
    Amount?: IntWithAggregatesFilter<"Discounted"> | number
  }

  export type Employee_sWhereInput = {
    AND?: Employee_sWhereInput | Employee_sWhereInput[]
    OR?: Employee_sWhereInput[]
    NOT?: Employee_sWhereInput | Employee_sWhereInput[]
    Employee_Id?: IntFilter<"Employee_s"> | number
    role?: StringFilter<"Employee_s"> | string
    User_Id?: IntNullableFilter<"Employee_s"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type Employee_sOrderByWithRelationInput = {
    Employee_Id?: SortOrder
    role?: SortOrder
    User_Id?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: Employee_sOrderByRelevanceInput
  }

  export type Employee_sWhereUniqueInput = Prisma.AtLeast<{
    Employee_Id?: number
    AND?: Employee_sWhereInput | Employee_sWhereInput[]
    OR?: Employee_sWhereInput[]
    NOT?: Employee_sWhereInput | Employee_sWhereInput[]
    role?: StringFilter<"Employee_s"> | string
    User_Id?: IntNullableFilter<"Employee_s"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "Employee_Id">

  export type Employee_sOrderByWithAggregationInput = {
    Employee_Id?: SortOrder
    role?: SortOrder
    User_Id?: SortOrderInput | SortOrder
    _count?: Employee_sCountOrderByAggregateInput
    _avg?: Employee_sAvgOrderByAggregateInput
    _max?: Employee_sMaxOrderByAggregateInput
    _min?: Employee_sMinOrderByAggregateInput
    _sum?: Employee_sSumOrderByAggregateInput
  }

  export type Employee_sScalarWhereWithAggregatesInput = {
    AND?: Employee_sScalarWhereWithAggregatesInput | Employee_sScalarWhereWithAggregatesInput[]
    OR?: Employee_sScalarWhereWithAggregatesInput[]
    NOT?: Employee_sScalarWhereWithAggregatesInput | Employee_sScalarWhereWithAggregatesInput[]
    Employee_Id?: IntWithAggregatesFilter<"Employee_s"> | number
    role?: StringWithAggregatesFilter<"Employee_s"> | string
    User_Id?: IntNullableWithAggregatesFilter<"Employee_s"> | number | null
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    Order_Items_Id?: IntFilter<"OrderItems"> | number
    Order_Id?: IntFilter<"OrderItems"> | number
    Product_Id?: IntNullableFilter<"OrderItems"> | number | null
    Discounted?: DiscountedListRelationFilter
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type OrderItemsOrderByWithRelationInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrderInput | SortOrder
    Discounted?: DiscountedOrderByRelationAggregateInput
    Orders?: OrdersOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    Order_Items_Id?: number
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    Order_Id?: IntFilter<"OrderItems"> | number
    Product_Id?: IntNullableFilter<"OrderItems"> | number | null
    Discounted?: DiscountedListRelationFilter
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "Order_Items_Id">

  export type OrderItemsOrderByWithAggregationInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrderInput | SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    Order_Items_Id?: IntWithAggregatesFilter<"OrderItems"> | number
    Order_Id?: IntWithAggregatesFilter<"OrderItems"> | number
    Product_Id?: IntNullableWithAggregatesFilter<"OrderItems"> | number | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    Order_Id?: IntFilter<"Orders"> | number
    Order_Date?: DateTimeFilter<"Orders"> | Date | string
    Order_Time?: DateTimeFilter<"Orders"> | Date | string
    User_ID?: IntNullableFilter<"Orders"> | number | null
    Total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    OrderItems?: XOR<OrderItemsNullableScalarRelationFilter, OrderItemsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Shipping_Table?: Shipping_TableListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    Order_Id?: SortOrder
    Order_Date?: SortOrder
    Order_Time?: SortOrder
    User_ID?: SortOrderInput | SortOrder
    Total?: SortOrder
    OrderItems?: OrderItemsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    Shipping_Table?: Shipping_TableOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    Order_Id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    Order_Date?: DateTimeFilter<"Orders"> | Date | string
    Order_Time?: DateTimeFilter<"Orders"> | Date | string
    User_ID?: IntNullableFilter<"Orders"> | number | null
    Total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    OrderItems?: XOR<OrderItemsNullableScalarRelationFilter, OrderItemsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Shipping_Table?: Shipping_TableListRelationFilter
  }, "Order_Id">

  export type OrdersOrderByWithAggregationInput = {
    Order_Id?: SortOrder
    Order_Date?: SortOrder
    Order_Time?: SortOrder
    User_ID?: SortOrderInput | SortOrder
    Total?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    Order_Id?: IntWithAggregatesFilter<"Orders"> | number
    Order_Date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    Order_Time?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    User_ID?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    Total?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Product_Id?: IntFilter<"Product"> | number
    Product_Name?: StringFilter<"Product"> | string
    Product_Description?: StringFilter<"Product"> | string
    Product_Price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFilter<"Product"> | number
    Product_img_uri?: StringNullableFilter<"Product"> | string | null
    OrderItems?: OrderItemsListRelationFilter
    Promo_items?: Promo_itemsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    Product_Id?: SortOrder
    Product_Name?: SortOrder
    Product_Description?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
    Product_img_uri?: SortOrderInput | SortOrder
    OrderItems?: OrderItemsOrderByRelationAggregateInput
    Promo_items?: Promo_itemsOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    Product_Id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Product_Name?: StringFilter<"Product"> | string
    Product_Description?: StringFilter<"Product"> | string
    Product_Price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFilter<"Product"> | number
    Product_img_uri?: StringNullableFilter<"Product"> | string | null
    OrderItems?: OrderItemsListRelationFilter
    Promo_items?: Promo_itemsListRelationFilter
  }, "Product_Id">

  export type ProductOrderByWithAggregationInput = {
    Product_Id?: SortOrder
    Product_Name?: SortOrder
    Product_Description?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
    Product_img_uri?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    Product_Id?: IntWithAggregatesFilter<"Product"> | number
    Product_Name?: StringWithAggregatesFilter<"Product"> | string
    Product_Description?: StringWithAggregatesFilter<"Product"> | string
    Product_Price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntWithAggregatesFilter<"Product"> | number
    Product_img_uri?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type PromoWhereInput = {
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    Id?: IntFilter<"Promo"> | number
    promo_name?: StringFilter<"Promo"> | string
    Discount_Percent?: DecimalFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFilter<"Promo"> | Date | string
    End_Date?: DateTimeFilter<"Promo"> | Date | string
    Promo_items?: XOR<Promo_itemsNullableScalarRelationFilter, Promo_itemsWhereInput> | null
  }

  export type PromoOrderByWithRelationInput = {
    Id?: SortOrder
    promo_name?: SortOrder
    Discount_Percent?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
    Promo_items?: Promo_itemsOrderByWithRelationInput
    _relevance?: PromoOrderByRelevanceInput
  }

  export type PromoWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    promo_name?: StringFilter<"Promo"> | string
    Discount_Percent?: DecimalFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFilter<"Promo"> | Date | string
    End_Date?: DateTimeFilter<"Promo"> | Date | string
    Promo_items?: XOR<Promo_itemsNullableScalarRelationFilter, Promo_itemsWhereInput> | null
  }, "Id">

  export type PromoOrderByWithAggregationInput = {
    Id?: SortOrder
    promo_name?: SortOrder
    Discount_Percent?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
    _count?: PromoCountOrderByAggregateInput
    _avg?: PromoAvgOrderByAggregateInput
    _max?: PromoMaxOrderByAggregateInput
    _min?: PromoMinOrderByAggregateInput
    _sum?: PromoSumOrderByAggregateInput
  }

  export type PromoScalarWhereWithAggregatesInput = {
    AND?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    OR?: PromoScalarWhereWithAggregatesInput[]
    NOT?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Promo"> | number
    promo_name?: StringWithAggregatesFilter<"Promo"> | string
    Discount_Percent?: DecimalWithAggregatesFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    End_Date?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
  }

  export type Promo_itemsWhereInput = {
    AND?: Promo_itemsWhereInput | Promo_itemsWhereInput[]
    OR?: Promo_itemsWhereInput[]
    NOT?: Promo_itemsWhereInput | Promo_itemsWhereInput[]
    Promo_id?: IntFilter<"Promo_items"> | number
    Product_id?: IntNullableFilter<"Promo_items"> | number | null
    Discounted?: DiscountedListRelationFilter
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    Promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
  }

  export type Promo_itemsOrderByWithRelationInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrderInput | SortOrder
    Discounted?: DiscountedOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
    Promo?: PromoOrderByWithRelationInput
  }

  export type Promo_itemsWhereUniqueInput = Prisma.AtLeast<{
    Promo_id?: number
    AND?: Promo_itemsWhereInput | Promo_itemsWhereInput[]
    OR?: Promo_itemsWhereInput[]
    NOT?: Promo_itemsWhereInput | Promo_itemsWhereInput[]
    Product_id?: IntNullableFilter<"Promo_items"> | number | null
    Discounted?: DiscountedListRelationFilter
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    Promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
  }, "Promo_id">

  export type Promo_itemsOrderByWithAggregationInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrderInput | SortOrder
    _count?: Promo_itemsCountOrderByAggregateInput
    _avg?: Promo_itemsAvgOrderByAggregateInput
    _max?: Promo_itemsMaxOrderByAggregateInput
    _min?: Promo_itemsMinOrderByAggregateInput
    _sum?: Promo_itemsSumOrderByAggregateInput
  }

  export type Promo_itemsScalarWhereWithAggregatesInput = {
    AND?: Promo_itemsScalarWhereWithAggregatesInput | Promo_itemsScalarWhereWithAggregatesInput[]
    OR?: Promo_itemsScalarWhereWithAggregatesInput[]
    NOT?: Promo_itemsScalarWhereWithAggregatesInput | Promo_itemsScalarWhereWithAggregatesInput[]
    Promo_id?: IntWithAggregatesFilter<"Promo_items"> | number
    Product_id?: IntNullableWithAggregatesFilter<"Promo_items"> | number | null
  }

  export type Shipping_TableWhereInput = {
    AND?: Shipping_TableWhereInput | Shipping_TableWhereInput[]
    OR?: Shipping_TableWhereInput[]
    NOT?: Shipping_TableWhereInput | Shipping_TableWhereInput[]
    Shipping_ID?: IntFilter<"Shipping_Table"> | number
    Order_id?: IntNullableFilter<"Shipping_Table"> | number | null
    Tracking_no?: StringFilter<"Shipping_Table"> | string
    Orders?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
  }

  export type Shipping_TableOrderByWithRelationInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrderInput | SortOrder
    Tracking_no?: SortOrder
    Orders?: OrdersOrderByWithRelationInput
    _relevance?: Shipping_TableOrderByRelevanceInput
  }

  export type Shipping_TableWhereUniqueInput = Prisma.AtLeast<{
    Shipping_ID?: number
    AND?: Shipping_TableWhereInput | Shipping_TableWhereInput[]
    OR?: Shipping_TableWhereInput[]
    NOT?: Shipping_TableWhereInput | Shipping_TableWhereInput[]
    Order_id?: IntNullableFilter<"Shipping_Table"> | number | null
    Tracking_no?: StringFilter<"Shipping_Table"> | string
    Orders?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
  }, "Shipping_ID">

  export type Shipping_TableOrderByWithAggregationInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrderInput | SortOrder
    Tracking_no?: SortOrder
    _count?: Shipping_TableCountOrderByAggregateInput
    _avg?: Shipping_TableAvgOrderByAggregateInput
    _max?: Shipping_TableMaxOrderByAggregateInput
    _min?: Shipping_TableMinOrderByAggregateInput
    _sum?: Shipping_TableSumOrderByAggregateInput
  }

  export type Shipping_TableScalarWhereWithAggregatesInput = {
    AND?: Shipping_TableScalarWhereWithAggregatesInput | Shipping_TableScalarWhereWithAggregatesInput[]
    OR?: Shipping_TableScalarWhereWithAggregatesInput[]
    NOT?: Shipping_TableScalarWhereWithAggregatesInput | Shipping_TableScalarWhereWithAggregatesInput[]
    Shipping_ID?: IntWithAggregatesFilter<"Shipping_Table"> | number
    Order_id?: IntNullableWithAggregatesFilter<"Shipping_Table"> | number | null
    Tracking_no?: StringWithAggregatesFilter<"Shipping_Table"> | string
  }

  export type User_NotificationsWhereInput = {
    AND?: User_NotificationsWhereInput | User_NotificationsWhereInput[]
    OR?: User_NotificationsWhereInput[]
    NOT?: User_NotificationsWhereInput | User_NotificationsWhereInput[]
    Notif_id?: IntFilter<"User_Notifications"> | number
    User_ID?: IntNullableFilter<"User_Notifications"> | number | null
    Message?: StringFilter<"User_Notifications"> | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type User_NotificationsOrderByWithRelationInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrderInput | SortOrder
    Message?: SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: User_NotificationsOrderByRelevanceInput
  }

  export type User_NotificationsWhereUniqueInput = Prisma.AtLeast<{
    Notif_id?: number
    AND?: User_NotificationsWhereInput | User_NotificationsWhereInput[]
    OR?: User_NotificationsWhereInput[]
    NOT?: User_NotificationsWhereInput | User_NotificationsWhereInput[]
    User_ID?: IntNullableFilter<"User_Notifications"> | number | null
    Message?: StringFilter<"User_Notifications"> | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "Notif_id">

  export type User_NotificationsOrderByWithAggregationInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrderInput | SortOrder
    Message?: SortOrder
    _count?: User_NotificationsCountOrderByAggregateInput
    _avg?: User_NotificationsAvgOrderByAggregateInput
    _max?: User_NotificationsMaxOrderByAggregateInput
    _min?: User_NotificationsMinOrderByAggregateInput
    _sum?: User_NotificationsSumOrderByAggregateInput
  }

  export type User_NotificationsScalarWhereWithAggregatesInput = {
    AND?: User_NotificationsScalarWhereWithAggregatesInput | User_NotificationsScalarWhereWithAggregatesInput[]
    OR?: User_NotificationsScalarWhereWithAggregatesInput[]
    NOT?: User_NotificationsScalarWhereWithAggregatesInput | User_NotificationsScalarWhereWithAggregatesInput[]
    Notif_id?: IntWithAggregatesFilter<"User_Notifications"> | number
    User_ID?: IntNullableWithAggregatesFilter<"User_Notifications"> | number | null
    Message?: StringWithAggregatesFilter<"User_Notifications"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    User_ID?: IntFilter<"Users"> | number
    User_img_uri?: StringNullableFilter<"Users"> | string | null
    Username?: StringFilter<"Users"> | string
    FirstName?: StringFilter<"Users"> | string
    LastName?: StringFilter<"Users"> | string
    Address?: StringNullableFilter<"Users"> | string | null
    City?: StringNullableFilter<"Users"> | string | null
    State?: StringNullableFilter<"Users"> | string | null
    ZipCode?: IntNullableFilter<"Users"> | number | null
    Password?: StringFilter<"Users"> | string
    Employee_s?: Employee_sListRelationFilter
    Orders?: OrdersListRelationFilter
    User_Notifications?: User_NotificationsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    User_ID?: SortOrder
    User_img_uri?: SortOrderInput | SortOrder
    Username?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    ZipCode?: SortOrderInput | SortOrder
    Password?: SortOrder
    Employee_s?: Employee_sOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    User_Notifications?: User_NotificationsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    User_ID?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    User_img_uri?: StringNullableFilter<"Users"> | string | null
    Username?: StringFilter<"Users"> | string
    FirstName?: StringFilter<"Users"> | string
    LastName?: StringFilter<"Users"> | string
    Address?: StringNullableFilter<"Users"> | string | null
    City?: StringNullableFilter<"Users"> | string | null
    State?: StringNullableFilter<"Users"> | string | null
    ZipCode?: IntNullableFilter<"Users"> | number | null
    Password?: StringFilter<"Users"> | string
    Employee_s?: Employee_sListRelationFilter
    Orders?: OrdersListRelationFilter
    User_Notifications?: User_NotificationsListRelationFilter
  }, "User_ID">

  export type UsersOrderByWithAggregationInput = {
    User_ID?: SortOrder
    User_img_uri?: SortOrderInput | SortOrder
    Username?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    ZipCode?: SortOrderInput | SortOrder
    Password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    User_ID?: IntWithAggregatesFilter<"Users"> | number
    User_img_uri?: StringNullableWithAggregatesFilter<"Users"> | string | null
    Username?: StringWithAggregatesFilter<"Users"> | string
    FirstName?: StringWithAggregatesFilter<"Users"> | string
    LastName?: StringWithAggregatesFilter<"Users"> | string
    Address?: StringNullableWithAggregatesFilter<"Users"> | string | null
    City?: StringNullableWithAggregatesFilter<"Users"> | string | null
    State?: StringNullableWithAggregatesFilter<"Users"> | string | null
    ZipCode?: IntNullableWithAggregatesFilter<"Users"> | number | null
    Password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type DiscountedCreateInput = {
    Amount: number
    OrderItems?: OrderItemsCreateNestedOneWithoutDiscountedInput
    Promo_items?: Promo_itemsCreateNestedOneWithoutDiscountedInput
  }

  export type DiscountedUncheckedCreateInput = {
    id?: number
    Order_item_id?: number | null
    Promo_Id?: number | null
    Amount: number
  }

  export type DiscountedUpdateInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    OrderItems?: OrderItemsUpdateOneWithoutDiscountedNestedInput
    Promo_items?: Promo_itemsUpdateOneWithoutDiscountedNestedInput
  }

  export type DiscountedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    Promo_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountedCreateManyInput = {
    id?: number
    Order_item_id?: number | null
    Promo_Id?: number | null
    Amount: number
  }

  export type DiscountedUpdateManyMutationInput = {
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    Promo_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type Employee_sCreateInput = {
    role: string
    Users?: UsersCreateNestedOneWithoutEmployee_sInput
  }

  export type Employee_sUncheckedCreateInput = {
    Employee_Id?: number
    role: string
    User_Id?: number | null
  }

  export type Employee_sUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneWithoutEmployee_sNestedInput
  }

  export type Employee_sUncheckedUpdateInput = {
    Employee_Id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    User_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Employee_sCreateManyInput = {
    Employee_Id?: number
    role: string
    User_Id?: number | null
  }

  export type Employee_sUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Employee_sUncheckedUpdateManyInput = {
    Employee_Id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    User_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemsCreateInput = {
    Order_Id: number
    Discounted?: DiscountedCreateNestedManyWithoutOrderItemsInput
    Orders?: OrdersCreateNestedOneWithoutOrderItemsInput
    Product?: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    Order_Items_Id?: number
    Order_Id: number
    Product_Id?: number | null
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutOrderItemsInput
  }

  export type OrderItemsUpdateInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Discounted?: DiscountedUpdateManyWithoutOrderItemsNestedInput
    Orders?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    Product?: ProductUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    Order_Items_Id?: IntFieldUpdateOperationsInput | number
    Order_Id?: IntFieldUpdateOperationsInput | number
    Product_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Discounted?: DiscountedUncheckedUpdateManyWithoutOrderItemsNestedInput
  }

  export type OrderItemsCreateManyInput = {
    Order_Items_Id?: number
    Order_Id: number
    Product_Id?: number | null
  }

  export type OrderItemsUpdateManyMutationInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    Order_Items_Id?: IntFieldUpdateOperationsInput | number
    Order_Id?: IntFieldUpdateOperationsInput | number
    Product_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersCreateInput = {
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsCreateNestedOneWithoutOrdersInput
    Users?: UsersCreateNestedOneWithoutOrdersInput
    Shipping_Table?: Shipping_TableCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    User_ID?: number | null
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedCreateNestedOneWithoutOrdersInput
    Shipping_Table?: Shipping_TableUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUpdateOneWithoutOrdersNestedInput
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    Shipping_Table?: Shipping_TableUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedUpdateOneWithoutOrdersNestedInput
    Shipping_Table?: Shipping_TableUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    User_ID?: number | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type OrdersUpdateManyMutationInput = {
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductCreateInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    OrderItems?: OrderItemsCreateNestedManyWithoutProductInput
    Promo_items?: Promo_itemsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    OrderItems?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
    Promo_items?: Promo_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    OrderItems?: OrderItemsUpdateManyWithoutProductNestedInput
    Promo_items?: Promo_itemsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    OrderItems?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
    Promo_items?: Promo_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromoCreateInput = {
    promo_name: string
    Discount_Percent: Decimal | DecimalJsLike | number | string
    Start_Date: Date | string
    End_Date: Date | string
    Promo_items?: Promo_itemsCreateNestedOneWithoutPromoInput
  }

  export type PromoUncheckedCreateInput = {
    Id?: number
    promo_name: string
    Discount_Percent: Decimal | DecimalJsLike | number | string
    Start_Date: Date | string
    End_Date: Date | string
    Promo_items?: Promo_itemsUncheckedCreateNestedOneWithoutPromoInput
  }

  export type PromoUpdateInput = {
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Promo_items?: Promo_itemsUpdateOneWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Promo_items?: Promo_itemsUncheckedUpdateOneWithoutPromoNestedInput
  }

  export type PromoCreateManyInput = {
    Id?: number
    promo_name: string
    Discount_Percent: Decimal | DecimalJsLike | number | string
    Start_Date: Date | string
    End_Date: Date | string
  }

  export type PromoUpdateManyMutationInput = {
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Promo_itemsCreateInput = {
    Discounted?: DiscountedCreateNestedManyWithoutPromo_itemsInput
    Product?: ProductCreateNestedOneWithoutPromo_itemsInput
    Promo: PromoCreateNestedOneWithoutPromo_itemsInput
  }

  export type Promo_itemsUncheckedCreateInput = {
    Promo_id: number
    Product_id?: number | null
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutPromo_itemsInput
  }

  export type Promo_itemsUpdateInput = {
    Discounted?: DiscountedUpdateManyWithoutPromo_itemsNestedInput
    Product?: ProductUpdateOneWithoutPromo_itemsNestedInput
    Promo?: PromoUpdateOneRequiredWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsUncheckedUpdateInput = {
    Promo_id?: IntFieldUpdateOperationsInput | number
    Product_id?: NullableIntFieldUpdateOperationsInput | number | null
    Discounted?: DiscountedUncheckedUpdateManyWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsCreateManyInput = {
    Promo_id: number
    Product_id?: number | null
  }

  export type Promo_itemsUpdateManyMutationInput = {

  }

  export type Promo_itemsUncheckedUpdateManyInput = {
    Promo_id?: IntFieldUpdateOperationsInput | number
    Product_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Shipping_TableCreateInput = {
    Tracking_no: string
    Orders?: OrdersCreateNestedOneWithoutShipping_TableInput
  }

  export type Shipping_TableUncheckedCreateInput = {
    Shipping_ID?: number
    Order_id?: number | null
    Tracking_no: string
  }

  export type Shipping_TableUpdateInput = {
    Tracking_no?: StringFieldUpdateOperationsInput | string
    Orders?: OrdersUpdateOneWithoutShipping_TableNestedInput
  }

  export type Shipping_TableUncheckedUpdateInput = {
    Shipping_ID?: IntFieldUpdateOperationsInput | number
    Order_id?: NullableIntFieldUpdateOperationsInput | number | null
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type Shipping_TableCreateManyInput = {
    Shipping_ID?: number
    Order_id?: number | null
    Tracking_no: string
  }

  export type Shipping_TableUpdateManyMutationInput = {
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type Shipping_TableUncheckedUpdateManyInput = {
    Shipping_ID?: IntFieldUpdateOperationsInput | number
    Order_id?: NullableIntFieldUpdateOperationsInput | number | null
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type User_NotificationsCreateInput = {
    Message: string
    Users?: UsersCreateNestedOneWithoutUser_NotificationsInput
  }

  export type User_NotificationsUncheckedCreateInput = {
    Notif_id?: number
    User_ID?: number | null
    Message: string
  }

  export type User_NotificationsUpdateInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneWithoutUser_NotificationsNestedInput
  }

  export type User_NotificationsUncheckedUpdateInput = {
    Notif_id?: IntFieldUpdateOperationsInput | number
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
  }

  export type User_NotificationsCreateManyInput = {
    Notif_id?: number
    User_ID?: number | null
    Message: string
  }

  export type User_NotificationsUpdateManyMutationInput = {
    Message?: StringFieldUpdateOperationsInput | string
  }

  export type User_NotificationsUncheckedUpdateManyInput = {
    Notif_id?: IntFieldUpdateOperationsInput | number
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    User_ID?: number
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    User_ID?: number
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
  }

  export type UsersUpdateManyMutationInput = {
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderItemsNullableScalarRelationFilter = {
    is?: OrderItemsWhereInput | null
    isNot?: OrderItemsWhereInput | null
  }

  export type Promo_itemsNullableScalarRelationFilter = {
    is?: Promo_itemsWhereInput | null
    isNot?: Promo_itemsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiscountedCountOrderByAggregateInput = {
    id?: SortOrder
    Order_item_id?: SortOrder
    Promo_Id?: SortOrder
    Amount?: SortOrder
  }

  export type DiscountedAvgOrderByAggregateInput = {
    id?: SortOrder
    Order_item_id?: SortOrder
    Promo_Id?: SortOrder
    Amount?: SortOrder
  }

  export type DiscountedMaxOrderByAggregateInput = {
    id?: SortOrder
    Order_item_id?: SortOrder
    Promo_Id?: SortOrder
    Amount?: SortOrder
  }

  export type DiscountedMinOrderByAggregateInput = {
    id?: SortOrder
    Order_item_id?: SortOrder
    Promo_Id?: SortOrder
    Amount?: SortOrder
  }

  export type DiscountedSumOrderByAggregateInput = {
    id?: SortOrder
    Order_item_id?: SortOrder
    Promo_Id?: SortOrder
    Amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type Employee_sOrderByRelevanceInput = {
    fields: Employee_sOrderByRelevanceFieldEnum | Employee_sOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Employee_sCountOrderByAggregateInput = {
    Employee_Id?: SortOrder
    role?: SortOrder
    User_Id?: SortOrder
  }

  export type Employee_sAvgOrderByAggregateInput = {
    Employee_Id?: SortOrder
    User_Id?: SortOrder
  }

  export type Employee_sMaxOrderByAggregateInput = {
    Employee_Id?: SortOrder
    role?: SortOrder
    User_Id?: SortOrder
  }

  export type Employee_sMinOrderByAggregateInput = {
    Employee_Id?: SortOrder
    role?: SortOrder
    User_Id?: SortOrder
  }

  export type Employee_sSumOrderByAggregateInput = {
    Employee_Id?: SortOrder
    User_Id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DiscountedListRelationFilter = {
    every?: DiscountedWhereInput
    some?: DiscountedWhereInput
    none?: DiscountedWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type DiscountedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemsCountOrderByAggregateInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    Order_Items_Id?: SortOrder
    Order_Id?: SortOrder
    Product_Id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Shipping_TableListRelationFilter = {
    every?: Shipping_TableWhereInput
    some?: Shipping_TableWhereInput
    none?: Shipping_TableWhereInput
  }

  export type Shipping_TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    Order_Id?: SortOrder
    Order_Date?: SortOrder
    Order_Time?: SortOrder
    User_ID?: SortOrder
    Total?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    Order_Id?: SortOrder
    User_ID?: SortOrder
    Total?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    Order_Id?: SortOrder
    Order_Date?: SortOrder
    Order_Time?: SortOrder
    User_ID?: SortOrder
    Total?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    Order_Id?: SortOrder
    Order_Date?: SortOrder
    Order_Time?: SortOrder
    User_ID?: SortOrder
    Total?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    Order_Id?: SortOrder
    User_ID?: SortOrder
    Total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type Promo_itemsListRelationFilter = {
    every?: Promo_itemsWhereInput
    some?: Promo_itemsWhereInput
    none?: Promo_itemsWhereInput
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Promo_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    Product_Id?: SortOrder
    Product_Name?: SortOrder
    Product_Description?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
    Product_img_uri?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    Product_Id?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    Product_Id?: SortOrder
    Product_Name?: SortOrder
    Product_Description?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
    Product_img_uri?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    Product_Id?: SortOrder
    Product_Name?: SortOrder
    Product_Description?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
    Product_img_uri?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    Product_Id?: SortOrder
    Product_Price?: SortOrder
    Product_Quatity?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PromoOrderByRelevanceInput = {
    fields: PromoOrderByRelevanceFieldEnum | PromoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromoCountOrderByAggregateInput = {
    Id?: SortOrder
    promo_name?: SortOrder
    Discount_Percent?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
  }

  export type PromoAvgOrderByAggregateInput = {
    Id?: SortOrder
    Discount_Percent?: SortOrder
  }

  export type PromoMaxOrderByAggregateInput = {
    Id?: SortOrder
    promo_name?: SortOrder
    Discount_Percent?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
  }

  export type PromoMinOrderByAggregateInput = {
    Id?: SortOrder
    promo_name?: SortOrder
    Discount_Percent?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
  }

  export type PromoSumOrderByAggregateInput = {
    Id?: SortOrder
    Discount_Percent?: SortOrder
  }

  export type PromoScalarRelationFilter = {
    is?: PromoWhereInput
    isNot?: PromoWhereInput
  }

  export type Promo_itemsCountOrderByAggregateInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrder
  }

  export type Promo_itemsAvgOrderByAggregateInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrder
  }

  export type Promo_itemsMaxOrderByAggregateInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrder
  }

  export type Promo_itemsMinOrderByAggregateInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrder
  }

  export type Promo_itemsSumOrderByAggregateInput = {
    Promo_id?: SortOrder
    Product_id?: SortOrder
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type Shipping_TableOrderByRelevanceInput = {
    fields: Shipping_TableOrderByRelevanceFieldEnum | Shipping_TableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Shipping_TableCountOrderByAggregateInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrder
    Tracking_no?: SortOrder
  }

  export type Shipping_TableAvgOrderByAggregateInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrder
  }

  export type Shipping_TableMaxOrderByAggregateInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrder
    Tracking_no?: SortOrder
  }

  export type Shipping_TableMinOrderByAggregateInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrder
    Tracking_no?: SortOrder
  }

  export type Shipping_TableSumOrderByAggregateInput = {
    Shipping_ID?: SortOrder
    Order_id?: SortOrder
  }

  export type User_NotificationsOrderByRelevanceInput = {
    fields: User_NotificationsOrderByRelevanceFieldEnum | User_NotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type User_NotificationsCountOrderByAggregateInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrder
    Message?: SortOrder
  }

  export type User_NotificationsAvgOrderByAggregateInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrder
  }

  export type User_NotificationsMaxOrderByAggregateInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrder
    Message?: SortOrder
  }

  export type User_NotificationsMinOrderByAggregateInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrder
    Message?: SortOrder
  }

  export type User_NotificationsSumOrderByAggregateInput = {
    Notif_id?: SortOrder
    User_ID?: SortOrder
  }

  export type Employee_sListRelationFilter = {
    every?: Employee_sWhereInput
    some?: Employee_sWhereInput
    none?: Employee_sWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type User_NotificationsListRelationFilter = {
    every?: User_NotificationsWhereInput
    some?: User_NotificationsWhereInput
    none?: User_NotificationsWhereInput
  }

  export type Employee_sOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    User_ID?: SortOrder
    User_img_uri?: SortOrder
    Username?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    ZipCode?: SortOrder
    Password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    User_ID?: SortOrder
    ZipCode?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    User_ID?: SortOrder
    User_img_uri?: SortOrder
    Username?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    ZipCode?: SortOrder
    Password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    User_ID?: SortOrder
    User_img_uri?: SortOrder
    Username?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    ZipCode?: SortOrder
    Password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    User_ID?: SortOrder
    ZipCode?: SortOrder
  }

  export type OrderItemsCreateNestedOneWithoutDiscountedInput = {
    create?: XOR<OrderItemsCreateWithoutDiscountedInput, OrderItemsUncheckedCreateWithoutDiscountedInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutDiscountedInput
    connect?: OrderItemsWhereUniqueInput
  }

  export type Promo_itemsCreateNestedOneWithoutDiscountedInput = {
    create?: XOR<Promo_itemsCreateWithoutDiscountedInput, Promo_itemsUncheckedCreateWithoutDiscountedInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutDiscountedInput
    connect?: Promo_itemsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemsUpdateOneWithoutDiscountedNestedInput = {
    create?: XOR<OrderItemsCreateWithoutDiscountedInput, OrderItemsUncheckedCreateWithoutDiscountedInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutDiscountedInput
    upsert?: OrderItemsUpsertWithoutDiscountedInput
    disconnect?: OrderItemsWhereInput | boolean
    delete?: OrderItemsWhereInput | boolean
    connect?: OrderItemsWhereUniqueInput
    update?: XOR<XOR<OrderItemsUpdateToOneWithWhereWithoutDiscountedInput, OrderItemsUpdateWithoutDiscountedInput>, OrderItemsUncheckedUpdateWithoutDiscountedInput>
  }

  export type Promo_itemsUpdateOneWithoutDiscountedNestedInput = {
    create?: XOR<Promo_itemsCreateWithoutDiscountedInput, Promo_itemsUncheckedCreateWithoutDiscountedInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutDiscountedInput
    upsert?: Promo_itemsUpsertWithoutDiscountedInput
    disconnect?: Promo_itemsWhereInput | boolean
    delete?: Promo_itemsWhereInput | boolean
    connect?: Promo_itemsWhereUniqueInput
    update?: XOR<XOR<Promo_itemsUpdateToOneWithWhereWithoutDiscountedInput, Promo_itemsUpdateWithoutDiscountedInput>, Promo_itemsUncheckedUpdateWithoutDiscountedInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutEmployee_sInput = {
    create?: XOR<UsersCreateWithoutEmployee_sInput, UsersUncheckedCreateWithoutEmployee_sInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployee_sInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateOneWithoutEmployee_sNestedInput = {
    create?: XOR<UsersCreateWithoutEmployee_sInput, UsersUncheckedCreateWithoutEmployee_sInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployee_sInput
    upsert?: UsersUpsertWithoutEmployee_sInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmployee_sInput, UsersUpdateWithoutEmployee_sInput>, UsersUncheckedUpdateWithoutEmployee_sInput>
  }

  export type DiscountedCreateNestedManyWithoutOrderItemsInput = {
    create?: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput> | DiscountedCreateWithoutOrderItemsInput[] | DiscountedUncheckedCreateWithoutOrderItemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutOrderItemsInput | DiscountedCreateOrConnectWithoutOrderItemsInput[]
    createMany?: DiscountedCreateManyOrderItemsInputEnvelope
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type DiscountedUncheckedCreateNestedManyWithoutOrderItemsInput = {
    create?: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput> | DiscountedCreateWithoutOrderItemsInput[] | DiscountedUncheckedCreateWithoutOrderItemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutOrderItemsInput | DiscountedCreateOrConnectWithoutOrderItemsInput[]
    createMany?: DiscountedCreateManyOrderItemsInputEnvelope
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
  }

  export type DiscountedUpdateManyWithoutOrderItemsNestedInput = {
    create?: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput> | DiscountedCreateWithoutOrderItemsInput[] | DiscountedUncheckedCreateWithoutOrderItemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutOrderItemsInput | DiscountedCreateOrConnectWithoutOrderItemsInput[]
    upsert?: DiscountedUpsertWithWhereUniqueWithoutOrderItemsInput | DiscountedUpsertWithWhereUniqueWithoutOrderItemsInput[]
    createMany?: DiscountedCreateManyOrderItemsInputEnvelope
    set?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    disconnect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    delete?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    update?: DiscountedUpdateWithWhereUniqueWithoutOrderItemsInput | DiscountedUpdateWithWhereUniqueWithoutOrderItemsInput[]
    updateMany?: DiscountedUpdateManyWithWhereWithoutOrderItemsInput | DiscountedUpdateManyWithWhereWithoutOrderItemsInput[]
    deleteMany?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
  }

  export type OrdersUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    upsert?: OrdersUpsertWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderItemsInput, OrdersUpdateWithoutOrderItemsInput>, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DiscountedUncheckedUpdateManyWithoutOrderItemsNestedInput = {
    create?: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput> | DiscountedCreateWithoutOrderItemsInput[] | DiscountedUncheckedCreateWithoutOrderItemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutOrderItemsInput | DiscountedCreateOrConnectWithoutOrderItemsInput[]
    upsert?: DiscountedUpsertWithWhereUniqueWithoutOrderItemsInput | DiscountedUpsertWithWhereUniqueWithoutOrderItemsInput[]
    createMany?: DiscountedCreateManyOrderItemsInputEnvelope
    set?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    disconnect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    delete?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    update?: DiscountedUpdateWithWhereUniqueWithoutOrderItemsInput | DiscountedUpdateWithWhereUniqueWithoutOrderItemsInput[]
    updateMany?: DiscountedUpdateManyWithWhereWithoutOrderItemsInput | DiscountedUpdateManyWithWhereWithoutOrderItemsInput[]
    deleteMany?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
  }

  export type OrderItemsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput
    connect?: OrderItemsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type Shipping_TableCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput> | Shipping_TableCreateWithoutOrdersInput[] | Shipping_TableUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Shipping_TableCreateOrConnectWithoutOrdersInput | Shipping_TableCreateOrConnectWithoutOrdersInput[]
    createMany?: Shipping_TableCreateManyOrdersInputEnvelope
    connect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput
    connect?: OrderItemsWhereUniqueInput
  }

  export type Shipping_TableUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput> | Shipping_TableCreateWithoutOrdersInput[] | Shipping_TableUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Shipping_TableCreateOrConnectWithoutOrdersInput | Shipping_TableCreateOrConnectWithoutOrdersInput[]
    createMany?: Shipping_TableCreateManyOrdersInputEnvelope
    connect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput
    upsert?: OrderItemsUpsertWithoutOrdersInput
    disconnect?: OrderItemsWhereInput | boolean
    delete?: OrderItemsWhereInput | boolean
    connect?: OrderItemsWhereUniqueInput
    update?: XOR<XOR<OrderItemsUpdateToOneWithWhereWithoutOrdersInput, OrderItemsUpdateWithoutOrdersInput>, OrderItemsUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type Shipping_TableUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput> | Shipping_TableCreateWithoutOrdersInput[] | Shipping_TableUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Shipping_TableCreateOrConnectWithoutOrdersInput | Shipping_TableCreateOrConnectWithoutOrdersInput[]
    upsert?: Shipping_TableUpsertWithWhereUniqueWithoutOrdersInput | Shipping_TableUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: Shipping_TableCreateManyOrdersInputEnvelope
    set?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    disconnect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    delete?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    connect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    update?: Shipping_TableUpdateWithWhereUniqueWithoutOrdersInput | Shipping_TableUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Shipping_TableUpdateManyWithWhereWithoutOrdersInput | Shipping_TableUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Shipping_TableScalarWhereInput | Shipping_TableScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput
    upsert?: OrderItemsUpsertWithoutOrdersInput
    disconnect?: OrderItemsWhereInput | boolean
    delete?: OrderItemsWhereInput | boolean
    connect?: OrderItemsWhereUniqueInput
    update?: XOR<XOR<OrderItemsUpdateToOneWithWhereWithoutOrdersInput, OrderItemsUpdateWithoutOrdersInput>, OrderItemsUncheckedUpdateWithoutOrdersInput>
  }

  export type Shipping_TableUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput> | Shipping_TableCreateWithoutOrdersInput[] | Shipping_TableUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Shipping_TableCreateOrConnectWithoutOrdersInput | Shipping_TableCreateOrConnectWithoutOrdersInput[]
    upsert?: Shipping_TableUpsertWithWhereUniqueWithoutOrdersInput | Shipping_TableUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: Shipping_TableCreateManyOrdersInputEnvelope
    set?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    disconnect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    delete?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    connect?: Shipping_TableWhereUniqueInput | Shipping_TableWhereUniqueInput[]
    update?: Shipping_TableUpdateWithWhereUniqueWithoutOrdersInput | Shipping_TableUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Shipping_TableUpdateManyWithWhereWithoutOrdersInput | Shipping_TableUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Shipping_TableScalarWhereInput | Shipping_TableScalarWhereInput[]
  }

  export type OrderItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type Promo_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput> | Promo_itemsCreateWithoutProductInput[] | Promo_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutProductInput | Promo_itemsCreateOrConnectWithoutProductInput[]
    createMany?: Promo_itemsCreateManyProductInputEnvelope
    connect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type Promo_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput> | Promo_itemsCreateWithoutProductInput[] | Promo_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutProductInput | Promo_itemsCreateOrConnectWithoutProductInput[]
    createMany?: Promo_itemsCreateManyProductInputEnvelope
    connect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type Promo_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput> | Promo_itemsCreateWithoutProductInput[] | Promo_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutProductInput | Promo_itemsCreateOrConnectWithoutProductInput[]
    upsert?: Promo_itemsUpsertWithWhereUniqueWithoutProductInput | Promo_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Promo_itemsCreateManyProductInputEnvelope
    set?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    disconnect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    delete?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    connect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    update?: Promo_itemsUpdateWithWhereUniqueWithoutProductInput | Promo_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Promo_itemsUpdateManyWithWhereWithoutProductInput | Promo_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Promo_itemsScalarWhereInput | Promo_itemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type Promo_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput> | Promo_itemsCreateWithoutProductInput[] | Promo_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutProductInput | Promo_itemsCreateOrConnectWithoutProductInput[]
    upsert?: Promo_itemsUpsertWithWhereUniqueWithoutProductInput | Promo_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Promo_itemsCreateManyProductInputEnvelope
    set?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    disconnect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    delete?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    connect?: Promo_itemsWhereUniqueInput | Promo_itemsWhereUniqueInput[]
    update?: Promo_itemsUpdateWithWhereUniqueWithoutProductInput | Promo_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Promo_itemsUpdateManyWithWhereWithoutProductInput | Promo_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Promo_itemsScalarWhereInput | Promo_itemsScalarWhereInput[]
  }

  export type Promo_itemsCreateNestedOneWithoutPromoInput = {
    create?: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutPromoInput
    connect?: Promo_itemsWhereUniqueInput
  }

  export type Promo_itemsUncheckedCreateNestedOneWithoutPromoInput = {
    create?: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutPromoInput
    connect?: Promo_itemsWhereUniqueInput
  }

  export type Promo_itemsUpdateOneWithoutPromoNestedInput = {
    create?: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutPromoInput
    upsert?: Promo_itemsUpsertWithoutPromoInput
    disconnect?: Promo_itemsWhereInput | boolean
    delete?: Promo_itemsWhereInput | boolean
    connect?: Promo_itemsWhereUniqueInput
    update?: XOR<XOR<Promo_itemsUpdateToOneWithWhereWithoutPromoInput, Promo_itemsUpdateWithoutPromoInput>, Promo_itemsUncheckedUpdateWithoutPromoInput>
  }

  export type Promo_itemsUncheckedUpdateOneWithoutPromoNestedInput = {
    create?: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
    connectOrCreate?: Promo_itemsCreateOrConnectWithoutPromoInput
    upsert?: Promo_itemsUpsertWithoutPromoInput
    disconnect?: Promo_itemsWhereInput | boolean
    delete?: Promo_itemsWhereInput | boolean
    connect?: Promo_itemsWhereUniqueInput
    update?: XOR<XOR<Promo_itemsUpdateToOneWithWhereWithoutPromoInput, Promo_itemsUpdateWithoutPromoInput>, Promo_itemsUncheckedUpdateWithoutPromoInput>
  }

  export type DiscountedCreateNestedManyWithoutPromo_itemsInput = {
    create?: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput> | DiscountedCreateWithoutPromo_itemsInput[] | DiscountedUncheckedCreateWithoutPromo_itemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutPromo_itemsInput | DiscountedCreateOrConnectWithoutPromo_itemsInput[]
    createMany?: DiscountedCreateManyPromo_itemsInputEnvelope
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutPromo_itemsInput = {
    create?: XOR<ProductCreateWithoutPromo_itemsInput, ProductUncheckedCreateWithoutPromo_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromo_itemsInput
    connect?: ProductWhereUniqueInput
  }

  export type PromoCreateNestedOneWithoutPromo_itemsInput = {
    create?: XOR<PromoCreateWithoutPromo_itemsInput, PromoUncheckedCreateWithoutPromo_itemsInput>
    connectOrCreate?: PromoCreateOrConnectWithoutPromo_itemsInput
    connect?: PromoWhereUniqueInput
  }

  export type DiscountedUncheckedCreateNestedManyWithoutPromo_itemsInput = {
    create?: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput> | DiscountedCreateWithoutPromo_itemsInput[] | DiscountedUncheckedCreateWithoutPromo_itemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutPromo_itemsInput | DiscountedCreateOrConnectWithoutPromo_itemsInput[]
    createMany?: DiscountedCreateManyPromo_itemsInputEnvelope
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
  }

  export type DiscountedUpdateManyWithoutPromo_itemsNestedInput = {
    create?: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput> | DiscountedCreateWithoutPromo_itemsInput[] | DiscountedUncheckedCreateWithoutPromo_itemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutPromo_itemsInput | DiscountedCreateOrConnectWithoutPromo_itemsInput[]
    upsert?: DiscountedUpsertWithWhereUniqueWithoutPromo_itemsInput | DiscountedUpsertWithWhereUniqueWithoutPromo_itemsInput[]
    createMany?: DiscountedCreateManyPromo_itemsInputEnvelope
    set?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    disconnect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    delete?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    update?: DiscountedUpdateWithWhereUniqueWithoutPromo_itemsInput | DiscountedUpdateWithWhereUniqueWithoutPromo_itemsInput[]
    updateMany?: DiscountedUpdateManyWithWhereWithoutPromo_itemsInput | DiscountedUpdateManyWithWhereWithoutPromo_itemsInput[]
    deleteMany?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
  }

  export type ProductUpdateOneWithoutPromo_itemsNestedInput = {
    create?: XOR<ProductCreateWithoutPromo_itemsInput, ProductUncheckedCreateWithoutPromo_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromo_itemsInput
    upsert?: ProductUpsertWithoutPromo_itemsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPromo_itemsInput, ProductUpdateWithoutPromo_itemsInput>, ProductUncheckedUpdateWithoutPromo_itemsInput>
  }

  export type PromoUpdateOneRequiredWithoutPromo_itemsNestedInput = {
    create?: XOR<PromoCreateWithoutPromo_itemsInput, PromoUncheckedCreateWithoutPromo_itemsInput>
    connectOrCreate?: PromoCreateOrConnectWithoutPromo_itemsInput
    upsert?: PromoUpsertWithoutPromo_itemsInput
    connect?: PromoWhereUniqueInput
    update?: XOR<XOR<PromoUpdateToOneWithWhereWithoutPromo_itemsInput, PromoUpdateWithoutPromo_itemsInput>, PromoUncheckedUpdateWithoutPromo_itemsInput>
  }

  export type DiscountedUncheckedUpdateManyWithoutPromo_itemsNestedInput = {
    create?: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput> | DiscountedCreateWithoutPromo_itemsInput[] | DiscountedUncheckedCreateWithoutPromo_itemsInput[]
    connectOrCreate?: DiscountedCreateOrConnectWithoutPromo_itemsInput | DiscountedCreateOrConnectWithoutPromo_itemsInput[]
    upsert?: DiscountedUpsertWithWhereUniqueWithoutPromo_itemsInput | DiscountedUpsertWithWhereUniqueWithoutPromo_itemsInput[]
    createMany?: DiscountedCreateManyPromo_itemsInputEnvelope
    set?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    disconnect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    delete?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    connect?: DiscountedWhereUniqueInput | DiscountedWhereUniqueInput[]
    update?: DiscountedUpdateWithWhereUniqueWithoutPromo_itemsInput | DiscountedUpdateWithWhereUniqueWithoutPromo_itemsInput[]
    updateMany?: DiscountedUpdateManyWithWhereWithoutPromo_itemsInput | DiscountedUpdateManyWithWhereWithoutPromo_itemsInput[]
    deleteMany?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutShipping_TableInput = {
    create?: XOR<OrdersCreateWithoutShipping_TableInput, OrdersUncheckedCreateWithoutShipping_TableInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_TableInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersUpdateOneWithoutShipping_TableNestedInput = {
    create?: XOR<OrdersCreateWithoutShipping_TableInput, OrdersUncheckedCreateWithoutShipping_TableInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_TableInput
    upsert?: OrdersUpsertWithoutShipping_TableInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutShipping_TableInput, OrdersUpdateWithoutShipping_TableInput>, OrdersUncheckedUpdateWithoutShipping_TableInput>
  }

  export type UsersCreateNestedOneWithoutUser_NotificationsInput = {
    create?: XOR<UsersCreateWithoutUser_NotificationsInput, UsersUncheckedCreateWithoutUser_NotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_NotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutUser_NotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutUser_NotificationsInput, UsersUncheckedCreateWithoutUser_NotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_NotificationsInput
    upsert?: UsersUpsertWithoutUser_NotificationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_NotificationsInput, UsersUpdateWithoutUser_NotificationsInput>, UsersUncheckedUpdateWithoutUser_NotificationsInput>
  }

  export type Employee_sCreateNestedManyWithoutUsersInput = {
    create?: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput> | Employee_sCreateWithoutUsersInput[] | Employee_sUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Employee_sCreateOrConnectWithoutUsersInput | Employee_sCreateOrConnectWithoutUsersInput[]
    createMany?: Employee_sCreateManyUsersInputEnvelope
    connect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type User_NotificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput> | User_NotificationsCreateWithoutUsersInput[] | User_NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_NotificationsCreateOrConnectWithoutUsersInput | User_NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: User_NotificationsCreateManyUsersInputEnvelope
    connect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
  }

  export type Employee_sUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput> | Employee_sCreateWithoutUsersInput[] | Employee_sUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Employee_sCreateOrConnectWithoutUsersInput | Employee_sCreateOrConnectWithoutUsersInput[]
    createMany?: Employee_sCreateManyUsersInputEnvelope
    connect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type User_NotificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput> | User_NotificationsCreateWithoutUsersInput[] | User_NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_NotificationsCreateOrConnectWithoutUsersInput | User_NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: User_NotificationsCreateManyUsersInputEnvelope
    connect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
  }

  export type Employee_sUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput> | Employee_sCreateWithoutUsersInput[] | Employee_sUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Employee_sCreateOrConnectWithoutUsersInput | Employee_sCreateOrConnectWithoutUsersInput[]
    upsert?: Employee_sUpsertWithWhereUniqueWithoutUsersInput | Employee_sUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Employee_sCreateManyUsersInputEnvelope
    set?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    disconnect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    delete?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    connect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    update?: Employee_sUpdateWithWhereUniqueWithoutUsersInput | Employee_sUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Employee_sUpdateManyWithWhereWithoutUsersInput | Employee_sUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Employee_sScalarWhereInput | Employee_sScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type User_NotificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput> | User_NotificationsCreateWithoutUsersInput[] | User_NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_NotificationsCreateOrConnectWithoutUsersInput | User_NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: User_NotificationsUpsertWithWhereUniqueWithoutUsersInput | User_NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: User_NotificationsCreateManyUsersInputEnvelope
    set?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    disconnect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    delete?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    connect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    update?: User_NotificationsUpdateWithWhereUniqueWithoutUsersInput | User_NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: User_NotificationsUpdateManyWithWhereWithoutUsersInput | User_NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: User_NotificationsScalarWhereInput | User_NotificationsScalarWhereInput[]
  }

  export type Employee_sUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput> | Employee_sCreateWithoutUsersInput[] | Employee_sUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Employee_sCreateOrConnectWithoutUsersInput | Employee_sCreateOrConnectWithoutUsersInput[]
    upsert?: Employee_sUpsertWithWhereUniqueWithoutUsersInput | Employee_sUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Employee_sCreateManyUsersInputEnvelope
    set?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    disconnect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    delete?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    connect?: Employee_sWhereUniqueInput | Employee_sWhereUniqueInput[]
    update?: Employee_sUpdateWithWhereUniqueWithoutUsersInput | Employee_sUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Employee_sUpdateManyWithWhereWithoutUsersInput | Employee_sUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Employee_sScalarWhereInput | Employee_sScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type User_NotificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput> | User_NotificationsCreateWithoutUsersInput[] | User_NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_NotificationsCreateOrConnectWithoutUsersInput | User_NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: User_NotificationsUpsertWithWhereUniqueWithoutUsersInput | User_NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: User_NotificationsCreateManyUsersInputEnvelope
    set?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    disconnect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    delete?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    connect?: User_NotificationsWhereUniqueInput | User_NotificationsWhereUniqueInput[]
    update?: User_NotificationsUpdateWithWhereUniqueWithoutUsersInput | User_NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: User_NotificationsUpdateManyWithWhereWithoutUsersInput | User_NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: User_NotificationsScalarWhereInput | User_NotificationsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrderItemsCreateWithoutDiscountedInput = {
    Order_Id: number
    Orders?: OrdersCreateNestedOneWithoutOrderItemsInput
    Product?: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutDiscountedInput = {
    Order_Items_Id?: number
    Order_Id: number
    Product_Id?: number | null
  }

  export type OrderItemsCreateOrConnectWithoutDiscountedInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutDiscountedInput, OrderItemsUncheckedCreateWithoutDiscountedInput>
  }

  export type Promo_itemsCreateWithoutDiscountedInput = {
    Product?: ProductCreateNestedOneWithoutPromo_itemsInput
    Promo: PromoCreateNestedOneWithoutPromo_itemsInput
  }

  export type Promo_itemsUncheckedCreateWithoutDiscountedInput = {
    Promo_id: number
    Product_id?: number | null
  }

  export type Promo_itemsCreateOrConnectWithoutDiscountedInput = {
    where: Promo_itemsWhereUniqueInput
    create: XOR<Promo_itemsCreateWithoutDiscountedInput, Promo_itemsUncheckedCreateWithoutDiscountedInput>
  }

  export type OrderItemsUpsertWithoutDiscountedInput = {
    update: XOR<OrderItemsUpdateWithoutDiscountedInput, OrderItemsUncheckedUpdateWithoutDiscountedInput>
    create: XOR<OrderItemsCreateWithoutDiscountedInput, OrderItemsUncheckedCreateWithoutDiscountedInput>
    where?: OrderItemsWhereInput
  }

  export type OrderItemsUpdateToOneWithWhereWithoutDiscountedInput = {
    where?: OrderItemsWhereInput
    data: XOR<OrderItemsUpdateWithoutDiscountedInput, OrderItemsUncheckedUpdateWithoutDiscountedInput>
  }

  export type OrderItemsUpdateWithoutDiscountedInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Orders?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    Product?: ProductUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutDiscountedInput = {
    Order_Items_Id?: IntFieldUpdateOperationsInput | number
    Order_Id?: IntFieldUpdateOperationsInput | number
    Product_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Promo_itemsUpsertWithoutDiscountedInput = {
    update: XOR<Promo_itemsUpdateWithoutDiscountedInput, Promo_itemsUncheckedUpdateWithoutDiscountedInput>
    create: XOR<Promo_itemsCreateWithoutDiscountedInput, Promo_itemsUncheckedCreateWithoutDiscountedInput>
    where?: Promo_itemsWhereInput
  }

  export type Promo_itemsUpdateToOneWithWhereWithoutDiscountedInput = {
    where?: Promo_itemsWhereInput
    data: XOR<Promo_itemsUpdateWithoutDiscountedInput, Promo_itemsUncheckedUpdateWithoutDiscountedInput>
  }

  export type Promo_itemsUpdateWithoutDiscountedInput = {
    Product?: ProductUpdateOneWithoutPromo_itemsNestedInput
    Promo?: PromoUpdateOneRequiredWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsUncheckedUpdateWithoutDiscountedInput = {
    Promo_id?: IntFieldUpdateOperationsInput | number
    Product_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCreateWithoutEmployee_sInput = {
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Orders?: OrdersCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEmployee_sInput = {
    User_ID?: number
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutEmployee_sInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEmployee_sInput, UsersUncheckedCreateWithoutEmployee_sInput>
  }

  export type UsersUpsertWithoutEmployee_sInput = {
    update: XOR<UsersUpdateWithoutEmployee_sInput, UsersUncheckedUpdateWithoutEmployee_sInput>
    create: XOR<UsersCreateWithoutEmployee_sInput, UsersUncheckedCreateWithoutEmployee_sInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEmployee_sInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEmployee_sInput, UsersUncheckedUpdateWithoutEmployee_sInput>
  }

  export type UsersUpdateWithoutEmployee_sInput = {
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEmployee_sInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type DiscountedCreateWithoutOrderItemsInput = {
    Amount: number
    Promo_items?: Promo_itemsCreateNestedOneWithoutDiscountedInput
  }

  export type DiscountedUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    Promo_Id?: number | null
    Amount: number
  }

  export type DiscountedCreateOrConnectWithoutOrderItemsInput = {
    where: DiscountedWhereUniqueInput
    create: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput>
  }

  export type DiscountedCreateManyOrderItemsInputEnvelope = {
    data: DiscountedCreateManyOrderItemsInput | DiscountedCreateManyOrderItemsInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutOrderItemsInput = {
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
    Users?: UsersCreateNestedOneWithoutOrdersInput
    Shipping_Table?: Shipping_TableCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrderItemsInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    User_ID?: number | null
    Total: Decimal | DecimalJsLike | number | string
    Shipping_Table?: Shipping_TableUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutOrderItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    Promo_items?: Promo_itemsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    Promo_items?: Promo_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type DiscountedUpsertWithWhereUniqueWithoutOrderItemsInput = {
    where: DiscountedWhereUniqueInput
    update: XOR<DiscountedUpdateWithoutOrderItemsInput, DiscountedUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<DiscountedCreateWithoutOrderItemsInput, DiscountedUncheckedCreateWithoutOrderItemsInput>
  }

  export type DiscountedUpdateWithWhereUniqueWithoutOrderItemsInput = {
    where: DiscountedWhereUniqueInput
    data: XOR<DiscountedUpdateWithoutOrderItemsInput, DiscountedUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DiscountedUpdateManyWithWhereWithoutOrderItemsInput = {
    where: DiscountedScalarWhereInput
    data: XOR<DiscountedUpdateManyMutationInput, DiscountedUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type DiscountedScalarWhereInput = {
    AND?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
    OR?: DiscountedScalarWhereInput[]
    NOT?: DiscountedScalarWhereInput | DiscountedScalarWhereInput[]
    id?: IntFilter<"Discounted"> | number
    Order_item_id?: IntNullableFilter<"Discounted"> | number | null
    Promo_Id?: IntNullableFilter<"Discounted"> | number | null
    Amount?: IntFilter<"Discounted"> | number
  }

  export type OrdersUpsertWithoutOrderItemsInput = {
    update: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrdersUpdateWithoutOrderItemsInput = {
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    Shipping_Table?: Shipping_TableUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderItemsInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Shipping_Table?: Shipping_TableUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Promo_items?: Promo_itemsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Promo_items?: Promo_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderItemsCreateWithoutOrdersInput = {
    Order_Id: number
    Discounted?: DiscountedCreateNestedManyWithoutOrderItemsInput
    Product?: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrdersInput = {
    Order_Id: number
    Product_Id?: number | null
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutOrderItemsInput
  }

  export type OrderItemsCreateOrConnectWithoutOrdersInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersCreateWithoutOrdersInput = {
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    User_ID?: number
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sUncheckedCreateNestedManyWithoutUsersInput
    User_Notifications?: User_NotificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type Shipping_TableCreateWithoutOrdersInput = {
    Tracking_no: string
  }

  export type Shipping_TableUncheckedCreateWithoutOrdersInput = {
    Shipping_ID?: number
    Tracking_no: string
  }

  export type Shipping_TableCreateOrConnectWithoutOrdersInput = {
    where: Shipping_TableWhereUniqueInput
    create: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput>
  }

  export type Shipping_TableCreateManyOrdersInputEnvelope = {
    data: Shipping_TableCreateManyOrdersInput | Shipping_TableCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsUpsertWithoutOrdersInput = {
    update: XOR<OrderItemsUpdateWithoutOrdersInput, OrderItemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
    where?: OrderItemsWhereInput
  }

  export type OrderItemsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OrderItemsWhereInput
    data: XOR<OrderItemsUpdateWithoutOrdersInput, OrderItemsUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemsUpdateWithoutOrdersInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Discounted?: DiscountedUpdateManyWithoutOrderItemsNestedInput
    Product?: ProductUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrdersInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Product_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Discounted?: DiscountedUncheckedUpdateManyWithoutOrderItemsNestedInput
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUncheckedUpdateManyWithoutUsersNestedInput
    User_Notifications?: User_NotificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Shipping_TableUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Shipping_TableWhereUniqueInput
    update: XOR<Shipping_TableUpdateWithoutOrdersInput, Shipping_TableUncheckedUpdateWithoutOrdersInput>
    create: XOR<Shipping_TableCreateWithoutOrdersInput, Shipping_TableUncheckedCreateWithoutOrdersInput>
  }

  export type Shipping_TableUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Shipping_TableWhereUniqueInput
    data: XOR<Shipping_TableUpdateWithoutOrdersInput, Shipping_TableUncheckedUpdateWithoutOrdersInput>
  }

  export type Shipping_TableUpdateManyWithWhereWithoutOrdersInput = {
    where: Shipping_TableScalarWhereInput
    data: XOR<Shipping_TableUpdateManyMutationInput, Shipping_TableUncheckedUpdateManyWithoutOrdersInput>
  }

  export type Shipping_TableScalarWhereInput = {
    AND?: Shipping_TableScalarWhereInput | Shipping_TableScalarWhereInput[]
    OR?: Shipping_TableScalarWhereInput[]
    NOT?: Shipping_TableScalarWhereInput | Shipping_TableScalarWhereInput[]
    Shipping_ID?: IntFilter<"Shipping_Table"> | number
    Order_id?: IntNullableFilter<"Shipping_Table"> | number | null
    Tracking_no?: StringFilter<"Shipping_Table"> | string
  }

  export type OrderItemsCreateWithoutProductInput = {
    Order_Id: number
    Discounted?: DiscountedCreateNestedManyWithoutOrderItemsInput
    Orders?: OrdersCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutProductInput = {
    Order_Items_Id?: number
    Order_Id: number
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutOrderItemsInput
  }

  export type OrderItemsCreateOrConnectWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsCreateManyProductInputEnvelope = {
    data: OrderItemsCreateManyProductInput | OrderItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Promo_itemsCreateWithoutProductInput = {
    Discounted?: DiscountedCreateNestedManyWithoutPromo_itemsInput
    Promo: PromoCreateNestedOneWithoutPromo_itemsInput
  }

  export type Promo_itemsUncheckedCreateWithoutProductInput = {
    Promo_id: number
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutPromo_itemsInput
  }

  export type Promo_itemsCreateOrConnectWithoutProductInput = {
    where: Promo_itemsWhereUniqueInput
    create: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput>
  }

  export type Promo_itemsCreateManyProductInputEnvelope = {
    data: Promo_itemsCreateManyProductInput | Promo_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    Order_Items_Id?: IntFilter<"OrderItems"> | number
    Order_Id?: IntFilter<"OrderItems"> | number
    Product_Id?: IntNullableFilter<"OrderItems"> | number | null
  }

  export type Promo_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Promo_itemsWhereUniqueInput
    update: XOR<Promo_itemsUpdateWithoutProductInput, Promo_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<Promo_itemsCreateWithoutProductInput, Promo_itemsUncheckedCreateWithoutProductInput>
  }

  export type Promo_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Promo_itemsWhereUniqueInput
    data: XOR<Promo_itemsUpdateWithoutProductInput, Promo_itemsUncheckedUpdateWithoutProductInput>
  }

  export type Promo_itemsUpdateManyWithWhereWithoutProductInput = {
    where: Promo_itemsScalarWhereInput
    data: XOR<Promo_itemsUpdateManyMutationInput, Promo_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type Promo_itemsScalarWhereInput = {
    AND?: Promo_itemsScalarWhereInput | Promo_itemsScalarWhereInput[]
    OR?: Promo_itemsScalarWhereInput[]
    NOT?: Promo_itemsScalarWhereInput | Promo_itemsScalarWhereInput[]
    Promo_id?: IntFilter<"Promo_items"> | number
    Product_id?: IntNullableFilter<"Promo_items"> | number | null
  }

  export type Promo_itemsCreateWithoutPromoInput = {
    Discounted?: DiscountedCreateNestedManyWithoutPromo_itemsInput
    Product?: ProductCreateNestedOneWithoutPromo_itemsInput
  }

  export type Promo_itemsUncheckedCreateWithoutPromoInput = {
    Product_id?: number | null
    Discounted?: DiscountedUncheckedCreateNestedManyWithoutPromo_itemsInput
  }

  export type Promo_itemsCreateOrConnectWithoutPromoInput = {
    where: Promo_itemsWhereUniqueInput
    create: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
  }

  export type Promo_itemsUpsertWithoutPromoInput = {
    update: XOR<Promo_itemsUpdateWithoutPromoInput, Promo_itemsUncheckedUpdateWithoutPromoInput>
    create: XOR<Promo_itemsCreateWithoutPromoInput, Promo_itemsUncheckedCreateWithoutPromoInput>
    where?: Promo_itemsWhereInput
  }

  export type Promo_itemsUpdateToOneWithWhereWithoutPromoInput = {
    where?: Promo_itemsWhereInput
    data: XOR<Promo_itemsUpdateWithoutPromoInput, Promo_itemsUncheckedUpdateWithoutPromoInput>
  }

  export type Promo_itemsUpdateWithoutPromoInput = {
    Discounted?: DiscountedUpdateManyWithoutPromo_itemsNestedInput
    Product?: ProductUpdateOneWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsUncheckedUpdateWithoutPromoInput = {
    Product_id?: NullableIntFieldUpdateOperationsInput | number | null
    Discounted?: DiscountedUncheckedUpdateManyWithoutPromo_itemsNestedInput
  }

  export type DiscountedCreateWithoutPromo_itemsInput = {
    Amount: number
    OrderItems?: OrderItemsCreateNestedOneWithoutDiscountedInput
  }

  export type DiscountedUncheckedCreateWithoutPromo_itemsInput = {
    id?: number
    Order_item_id?: number | null
    Amount: number
  }

  export type DiscountedCreateOrConnectWithoutPromo_itemsInput = {
    where: DiscountedWhereUniqueInput
    create: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput>
  }

  export type DiscountedCreateManyPromo_itemsInputEnvelope = {
    data: DiscountedCreateManyPromo_itemsInput | DiscountedCreateManyPromo_itemsInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutPromo_itemsInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    OrderItems?: OrderItemsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPromo_itemsInput = {
    Product_Id: number
    Product_Name: string
    Product_Description: string
    Product_Price: Decimal | DecimalJsLike | number | string
    Product_Quatity: number
    Product_img_uri?: string | null
    OrderItems?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPromo_itemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPromo_itemsInput, ProductUncheckedCreateWithoutPromo_itemsInput>
  }

  export type PromoCreateWithoutPromo_itemsInput = {
    promo_name: string
    Discount_Percent: Decimal | DecimalJsLike | number | string
    Start_Date: Date | string
    End_Date: Date | string
  }

  export type PromoUncheckedCreateWithoutPromo_itemsInput = {
    Id?: number
    promo_name: string
    Discount_Percent: Decimal | DecimalJsLike | number | string
    Start_Date: Date | string
    End_Date: Date | string
  }

  export type PromoCreateOrConnectWithoutPromo_itemsInput = {
    where: PromoWhereUniqueInput
    create: XOR<PromoCreateWithoutPromo_itemsInput, PromoUncheckedCreateWithoutPromo_itemsInput>
  }

  export type DiscountedUpsertWithWhereUniqueWithoutPromo_itemsInput = {
    where: DiscountedWhereUniqueInput
    update: XOR<DiscountedUpdateWithoutPromo_itemsInput, DiscountedUncheckedUpdateWithoutPromo_itemsInput>
    create: XOR<DiscountedCreateWithoutPromo_itemsInput, DiscountedUncheckedCreateWithoutPromo_itemsInput>
  }

  export type DiscountedUpdateWithWhereUniqueWithoutPromo_itemsInput = {
    where: DiscountedWhereUniqueInput
    data: XOR<DiscountedUpdateWithoutPromo_itemsInput, DiscountedUncheckedUpdateWithoutPromo_itemsInput>
  }

  export type DiscountedUpdateManyWithWhereWithoutPromo_itemsInput = {
    where: DiscountedScalarWhereInput
    data: XOR<DiscountedUpdateManyMutationInput, DiscountedUncheckedUpdateManyWithoutPromo_itemsInput>
  }

  export type ProductUpsertWithoutPromo_itemsInput = {
    update: XOR<ProductUpdateWithoutPromo_itemsInput, ProductUncheckedUpdateWithoutPromo_itemsInput>
    create: XOR<ProductCreateWithoutPromo_itemsInput, ProductUncheckedCreateWithoutPromo_itemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPromo_itemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPromo_itemsInput, ProductUncheckedUpdateWithoutPromo_itemsInput>
  }

  export type ProductUpdateWithoutPromo_itemsInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    OrderItems?: OrderItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPromo_itemsInput = {
    Product_Id?: IntFieldUpdateOperationsInput | number
    Product_Name?: StringFieldUpdateOperationsInput | string
    Product_Description?: StringFieldUpdateOperationsInput | string
    Product_Price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Product_Quatity?: IntFieldUpdateOperationsInput | number
    Product_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    OrderItems?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PromoUpsertWithoutPromo_itemsInput = {
    update: XOR<PromoUpdateWithoutPromo_itemsInput, PromoUncheckedUpdateWithoutPromo_itemsInput>
    create: XOR<PromoCreateWithoutPromo_itemsInput, PromoUncheckedCreateWithoutPromo_itemsInput>
    where?: PromoWhereInput
  }

  export type PromoUpdateToOneWithWhereWithoutPromo_itemsInput = {
    where?: PromoWhereInput
    data: XOR<PromoUpdateWithoutPromo_itemsInput, PromoUncheckedUpdateWithoutPromo_itemsInput>
  }

  export type PromoUpdateWithoutPromo_itemsInput = {
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateWithoutPromo_itemsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    promo_name?: StringFieldUpdateOperationsInput | string
    Discount_Percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Start_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    End_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutShipping_TableInput = {
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsCreateNestedOneWithoutOrdersInput
    Users?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutShipping_TableInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    User_ID?: number | null
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutShipping_TableInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutShipping_TableInput, OrdersUncheckedCreateWithoutShipping_TableInput>
  }

  export type OrdersUpsertWithoutShipping_TableInput = {
    update: XOR<OrdersUpdateWithoutShipping_TableInput, OrdersUncheckedUpdateWithoutShipping_TableInput>
    create: XOR<OrdersCreateWithoutShipping_TableInput, OrdersUncheckedCreateWithoutShipping_TableInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutShipping_TableInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutShipping_TableInput, OrdersUncheckedUpdateWithoutShipping_TableInput>
  }

  export type OrdersUpdateWithoutShipping_TableInput = {
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUpdateOneWithoutOrdersNestedInput
    Users?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutShipping_TableInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    User_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type UsersCreateWithoutUser_NotificationsInput = {
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUser_NotificationsInput = {
    User_ID?: number
    User_img_uri?: string | null
    Username: string
    FirstName: string
    LastName: string
    Address?: string | null
    City?: string | null
    State?: string | null
    ZipCode?: number | null
    Password: string
    Employee_s?: Employee_sUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUser_NotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_NotificationsInput, UsersUncheckedCreateWithoutUser_NotificationsInput>
  }

  export type UsersUpsertWithoutUser_NotificationsInput = {
    update: XOR<UsersUpdateWithoutUser_NotificationsInput, UsersUncheckedUpdateWithoutUser_NotificationsInput>
    create: XOR<UsersCreateWithoutUser_NotificationsInput, UsersUncheckedCreateWithoutUser_NotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_NotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_NotificationsInput, UsersUncheckedUpdateWithoutUser_NotificationsInput>
  }

  export type UsersUpdateWithoutUser_NotificationsInput = {
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_NotificationsInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    User_img_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    ZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    Password?: StringFieldUpdateOperationsInput | string
    Employee_s?: Employee_sUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Employee_sCreateWithoutUsersInput = {
    role: string
  }

  export type Employee_sUncheckedCreateWithoutUsersInput = {
    Employee_Id?: number
    role: string
  }

  export type Employee_sCreateOrConnectWithoutUsersInput = {
    where: Employee_sWhereUniqueInput
    create: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput>
  }

  export type Employee_sCreateManyUsersInputEnvelope = {
    data: Employee_sCreateManyUsersInput | Employee_sCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUsersInput = {
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsCreateNestedOneWithoutOrdersInput
    Shipping_Table?: Shipping_TableCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUsersInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedCreateNestedOneWithoutOrdersInput
    Shipping_Table?: Shipping_TableUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersCreateManyUsersInputEnvelope = {
    data: OrdersCreateManyUsersInput | OrdersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type User_NotificationsCreateWithoutUsersInput = {
    Message: string
  }

  export type User_NotificationsUncheckedCreateWithoutUsersInput = {
    Notif_id?: number
    Message: string
  }

  export type User_NotificationsCreateOrConnectWithoutUsersInput = {
    where: User_NotificationsWhereUniqueInput
    create: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type User_NotificationsCreateManyUsersInputEnvelope = {
    data: User_NotificationsCreateManyUsersInput | User_NotificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Employee_sUpsertWithWhereUniqueWithoutUsersInput = {
    where: Employee_sWhereUniqueInput
    update: XOR<Employee_sUpdateWithoutUsersInput, Employee_sUncheckedUpdateWithoutUsersInput>
    create: XOR<Employee_sCreateWithoutUsersInput, Employee_sUncheckedCreateWithoutUsersInput>
  }

  export type Employee_sUpdateWithWhereUniqueWithoutUsersInput = {
    where: Employee_sWhereUniqueInput
    data: XOR<Employee_sUpdateWithoutUsersInput, Employee_sUncheckedUpdateWithoutUsersInput>
  }

  export type Employee_sUpdateManyWithWhereWithoutUsersInput = {
    where: Employee_sScalarWhereInput
    data: XOR<Employee_sUpdateManyMutationInput, Employee_sUncheckedUpdateManyWithoutUsersInput>
  }

  export type Employee_sScalarWhereInput = {
    AND?: Employee_sScalarWhereInput | Employee_sScalarWhereInput[]
    OR?: Employee_sScalarWhereInput[]
    NOT?: Employee_sScalarWhereInput | Employee_sScalarWhereInput[]
    Employee_Id?: IntFilter<"Employee_s"> | number
    role?: StringFilter<"Employee_s"> | string
    User_Id?: IntNullableFilter<"Employee_s"> | number | null
  }

  export type OrdersUpsertWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUsersInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    Order_Id?: IntFilter<"Orders"> | number
    Order_Date?: DateTimeFilter<"Orders"> | Date | string
    Order_Time?: DateTimeFilter<"Orders"> | Date | string
    User_ID?: IntNullableFilter<"Orders"> | number | null
    Total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
  }

  export type User_NotificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: User_NotificationsWhereUniqueInput
    update: XOR<User_NotificationsUpdateWithoutUsersInput, User_NotificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<User_NotificationsCreateWithoutUsersInput, User_NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type User_NotificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: User_NotificationsWhereUniqueInput
    data: XOR<User_NotificationsUpdateWithoutUsersInput, User_NotificationsUncheckedUpdateWithoutUsersInput>
  }

  export type User_NotificationsUpdateManyWithWhereWithoutUsersInput = {
    where: User_NotificationsScalarWhereInput
    data: XOR<User_NotificationsUpdateManyMutationInput, User_NotificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type User_NotificationsScalarWhereInput = {
    AND?: User_NotificationsScalarWhereInput | User_NotificationsScalarWhereInput[]
    OR?: User_NotificationsScalarWhereInput[]
    NOT?: User_NotificationsScalarWhereInput | User_NotificationsScalarWhereInput[]
    Notif_id?: IntFilter<"User_Notifications"> | number
    User_ID?: IntNullableFilter<"User_Notifications"> | number | null
    Message?: StringFilter<"User_Notifications"> | string
  }

  export type DiscountedCreateManyOrderItemsInput = {
    id?: number
    Promo_Id?: number | null
    Amount: number
  }

  export type DiscountedUpdateWithoutOrderItemsInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    Promo_items?: Promo_itemsUpdateOneWithoutDiscountedNestedInput
  }

  export type DiscountedUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Promo_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountedUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Promo_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type Shipping_TableCreateManyOrdersInput = {
    Shipping_ID?: number
    Tracking_no: string
  }

  export type Shipping_TableUpdateWithoutOrdersInput = {
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type Shipping_TableUncheckedUpdateWithoutOrdersInput = {
    Shipping_ID?: IntFieldUpdateOperationsInput | number
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type Shipping_TableUncheckedUpdateManyWithoutOrdersInput = {
    Shipping_ID?: IntFieldUpdateOperationsInput | number
    Tracking_no?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemsCreateManyProductInput = {
    Order_Items_Id?: number
    Order_Id: number
  }

  export type Promo_itemsCreateManyProductInput = {
    Promo_id: number
  }

  export type OrderItemsUpdateWithoutProductInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Discounted?: DiscountedUpdateManyWithoutOrderItemsNestedInput
    Orders?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutProductInput = {
    Order_Items_Id?: IntFieldUpdateOperationsInput | number
    Order_Id?: IntFieldUpdateOperationsInput | number
    Discounted?: DiscountedUncheckedUpdateManyWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductInput = {
    Order_Items_Id?: IntFieldUpdateOperationsInput | number
    Order_Id?: IntFieldUpdateOperationsInput | number
  }

  export type Promo_itemsUpdateWithoutProductInput = {
    Discounted?: DiscountedUpdateManyWithoutPromo_itemsNestedInput
    Promo?: PromoUpdateOneRequiredWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsUncheckedUpdateWithoutProductInput = {
    Promo_id?: IntFieldUpdateOperationsInput | number
    Discounted?: DiscountedUncheckedUpdateManyWithoutPromo_itemsNestedInput
  }

  export type Promo_itemsUncheckedUpdateManyWithoutProductInput = {
    Promo_id?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountedCreateManyPromo_itemsInput = {
    id?: number
    Order_item_id?: number | null
    Amount: number
  }

  export type DiscountedUpdateWithoutPromo_itemsInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    OrderItems?: OrderItemsUpdateOneWithoutDiscountedNestedInput
  }

  export type DiscountedUncheckedUpdateWithoutPromo_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountedUncheckedUpdateManyWithoutPromo_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Order_item_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type Employee_sCreateManyUsersInput = {
    Employee_Id?: number
    role: string
  }

  export type OrdersCreateManyUsersInput = {
    Order_Id?: number
    Order_Date: Date | string
    Order_Time: Date | string
    Total: Decimal | DecimalJsLike | number | string
  }

  export type User_NotificationsCreateManyUsersInput = {
    Notif_id?: number
    Message: string
  }

  export type Employee_sUpdateWithoutUsersInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Employee_sUncheckedUpdateWithoutUsersInput = {
    Employee_Id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Employee_sUncheckedUpdateManyWithoutUsersInput = {
    Employee_Id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpdateWithoutUsersInput = {
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUpdateOneWithoutOrdersNestedInput
    Shipping_Table?: Shipping_TableUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUsersInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    OrderItems?: OrderItemsUncheckedUpdateOneWithoutOrdersNestedInput
    Shipping_Table?: Shipping_TableUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUsersInput = {
    Order_Id?: IntFieldUpdateOperationsInput | number
    Order_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Time?: DateTimeFieldUpdateOperationsInput | Date | string
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type User_NotificationsUpdateWithoutUsersInput = {
    Message?: StringFieldUpdateOperationsInput | string
  }

  export type User_NotificationsUncheckedUpdateWithoutUsersInput = {
    Notif_id?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
  }

  export type User_NotificationsUncheckedUpdateManyWithoutUsersInput = {
    Notif_id?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}