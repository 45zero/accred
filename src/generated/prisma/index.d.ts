
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model accred_competitions
 * 
 */
export type accred_competitions = $Result.DefaultSelection<Prisma.$accred_competitionsPayload>
/**
 * Model accred_functions
 * Liste des fonctions proposées dans le formulaire public (Photographe,
 * Caméraman, ...), éditable depuis l'admin — même principe que les compétitions.
 */
export type accred_functions = $Result.DefaultSelection<Prisma.$accred_functionsPayload>
/**
 * Model accred_admins
 * Comptes admin autorisés à gérer les accréditations. role distingue le
 * super_admin (gère cette liste) des managers (traitent les demandes) —
 * email doit correspondre à un compte Supabase Auth existant (même projet
 * que lgef-quiz-), aucun système de login séparé.
 */
export type accred_admins = $Result.DefaultSelection<Prisma.$accred_adminsPayload>
/**
 * Model accred_requests
 * Demande d'accréditation média. response_message reste générique (pas
 * "email_message") pour pouvoir servir à un futur envoi WhatsApp.
 * zone_terrain/zone_tribune/zone_vestiaires : cochées par l'admin à la
 * validation, pas par le demandeur — pilotent le rendu du badge PDF.
 */
export type accred_requests = $Result.DefaultSelection<Prisma.$accred_requestsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accred_competitions
 * const accred_competitions = await prisma.accred_competitions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accred_competitions
   * const accred_competitions = await prisma.accred_competitions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accred_competitions`: Exposes CRUD operations for the **accred_competitions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accred_competitions
    * const accred_competitions = await prisma.accred_competitions.findMany()
    * ```
    */
  get accred_competitions(): Prisma.accred_competitionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accred_functions`: Exposes CRUD operations for the **accred_functions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accred_functions
    * const accred_functions = await prisma.accred_functions.findMany()
    * ```
    */
  get accred_functions(): Prisma.accred_functionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accred_admins`: Exposes CRUD operations for the **accred_admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accred_admins
    * const accred_admins = await prisma.accred_admins.findMany()
    * ```
    */
  get accred_admins(): Prisma.accred_adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accred_requests`: Exposes CRUD operations for the **accred_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accred_requests
    * const accred_requests = await prisma.accred_requests.findMany()
    * ```
    */
  get accred_requests(): Prisma.accred_requestsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    accred_competitions: 'accred_competitions',
    accred_functions: 'accred_functions',
    accred_admins: 'accred_admins',
    accred_requests: 'accred_requests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accred_competitions" | "accred_functions" | "accred_admins" | "accred_requests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      accred_competitions: {
        payload: Prisma.$accred_competitionsPayload<ExtArgs>
        fields: Prisma.accred_competitionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accred_competitionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accred_competitionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          findFirst: {
            args: Prisma.accred_competitionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accred_competitionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          findMany: {
            args: Prisma.accred_competitionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>[]
          }
          create: {
            args: Prisma.accred_competitionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          createMany: {
            args: Prisma.accred_competitionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accred_competitionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>[]
          }
          delete: {
            args: Prisma.accred_competitionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          update: {
            args: Prisma.accred_competitionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          deleteMany: {
            args: Prisma.accred_competitionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accred_competitionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accred_competitionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>[]
          }
          upsert: {
            args: Prisma.accred_competitionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_competitionsPayload>
          }
          aggregate: {
            args: Prisma.Accred_competitionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccred_competitions>
          }
          groupBy: {
            args: Prisma.accred_competitionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Accred_competitionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accred_competitionsCountArgs<ExtArgs>
            result: $Utils.Optional<Accred_competitionsCountAggregateOutputType> | number
          }
        }
      }
      accred_functions: {
        payload: Prisma.$accred_functionsPayload<ExtArgs>
        fields: Prisma.accred_functionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accred_functionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accred_functionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          findFirst: {
            args: Prisma.accred_functionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accred_functionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          findMany: {
            args: Prisma.accred_functionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>[]
          }
          create: {
            args: Prisma.accred_functionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          createMany: {
            args: Prisma.accred_functionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accred_functionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>[]
          }
          delete: {
            args: Prisma.accred_functionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          update: {
            args: Prisma.accred_functionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          deleteMany: {
            args: Prisma.accred_functionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accred_functionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accred_functionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>[]
          }
          upsert: {
            args: Prisma.accred_functionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_functionsPayload>
          }
          aggregate: {
            args: Prisma.Accred_functionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccred_functions>
          }
          groupBy: {
            args: Prisma.accred_functionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Accred_functionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accred_functionsCountArgs<ExtArgs>
            result: $Utils.Optional<Accred_functionsCountAggregateOutputType> | number
          }
        }
      }
      accred_admins: {
        payload: Prisma.$accred_adminsPayload<ExtArgs>
        fields: Prisma.accred_adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accred_adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accred_adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          findFirst: {
            args: Prisma.accred_adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accred_adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          findMany: {
            args: Prisma.accred_adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>[]
          }
          create: {
            args: Prisma.accred_adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          createMany: {
            args: Prisma.accred_adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accred_adminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>[]
          }
          delete: {
            args: Prisma.accred_adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          update: {
            args: Prisma.accred_adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          deleteMany: {
            args: Prisma.accred_adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accred_adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accred_adminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>[]
          }
          upsert: {
            args: Prisma.accred_adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_adminsPayload>
          }
          aggregate: {
            args: Prisma.Accred_adminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccred_admins>
          }
          groupBy: {
            args: Prisma.accred_adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Accred_adminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accred_adminsCountArgs<ExtArgs>
            result: $Utils.Optional<Accred_adminsCountAggregateOutputType> | number
          }
        }
      }
      accred_requests: {
        payload: Prisma.$accred_requestsPayload<ExtArgs>
        fields: Prisma.accred_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accred_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accred_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          findFirst: {
            args: Prisma.accred_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accred_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          findMany: {
            args: Prisma.accred_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>[]
          }
          create: {
            args: Prisma.accred_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          createMany: {
            args: Prisma.accred_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accred_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>[]
          }
          delete: {
            args: Prisma.accred_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          update: {
            args: Prisma.accred_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          deleteMany: {
            args: Prisma.accred_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accred_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accred_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>[]
          }
          upsert: {
            args: Prisma.accred_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accred_requestsPayload>
          }
          aggregate: {
            args: Prisma.Accred_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccred_requests>
          }
          groupBy: {
            args: Prisma.accred_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Accred_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accred_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Accred_requestsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    accred_competitions?: accred_competitionsOmit
    accred_functions?: accred_functionsOmit
    accred_admins?: accred_adminsOmit
    accred_requests?: accred_requestsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Accred_competitionsCountOutputType
   */

  export type Accred_competitionsCountOutputType = {
    requests: number
  }

  export type Accred_competitionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Accred_competitionsCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * Accred_competitionsCountOutputType without action
   */
  export type Accred_competitionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accred_competitionsCountOutputType
     */
    select?: Accred_competitionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Accred_competitionsCountOutputType without action
   */
  export type Accred_competitionsCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_requestsWhereInput
  }


  /**
   * Count Type Accred_functionsCountOutputType
   */

  export type Accred_functionsCountOutputType = {
    requests: number
  }

  export type Accred_functionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Accred_functionsCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * Accred_functionsCountOutputType without action
   */
  export type Accred_functionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accred_functionsCountOutputType
     */
    select?: Accred_functionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Accred_functionsCountOutputType without action
   */
  export type Accred_functionsCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_requestsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model accred_competitions
   */

  export type AggregateAccred_competitions = {
    _count: Accred_competitionsCountAggregateOutputType | null
    _min: Accred_competitionsMinAggregateOutputType | null
    _max: Accred_competitionsMaxAggregateOutputType | null
  }

  export type Accred_competitionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    event_date: Date | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Accred_competitionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    event_date: Date | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Accred_competitionsCountAggregateOutputType = {
    id: number
    name: number
    event_date: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Accred_competitionsMinAggregateInputType = {
    id?: true
    name?: true
    event_date?: true
    is_active?: true
    created_at?: true
  }

  export type Accred_competitionsMaxAggregateInputType = {
    id?: true
    name?: true
    event_date?: true
    is_active?: true
    created_at?: true
  }

  export type Accred_competitionsCountAggregateInputType = {
    id?: true
    name?: true
    event_date?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Accred_competitionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_competitions to aggregate.
     */
    where?: accred_competitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_competitions to fetch.
     */
    orderBy?: accred_competitionsOrderByWithRelationInput | accred_competitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accred_competitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accred_competitions
    **/
    _count?: true | Accred_competitionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Accred_competitionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Accred_competitionsMaxAggregateInputType
  }

  export type GetAccred_competitionsAggregateType<T extends Accred_competitionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccred_competitions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccred_competitions[P]>
      : GetScalarType<T[P], AggregateAccred_competitions[P]>
  }




  export type accred_competitionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_competitionsWhereInput
    orderBy?: accred_competitionsOrderByWithAggregationInput | accred_competitionsOrderByWithAggregationInput[]
    by: Accred_competitionsScalarFieldEnum[] | Accred_competitionsScalarFieldEnum
    having?: accred_competitionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Accred_competitionsCountAggregateInputType | true
    _min?: Accred_competitionsMinAggregateInputType
    _max?: Accred_competitionsMaxAggregateInputType
  }

  export type Accred_competitionsGroupByOutputType = {
    id: string
    name: string
    event_date: Date | null
    is_active: boolean | null
    created_at: Date | null
    _count: Accred_competitionsCountAggregateOutputType | null
    _min: Accred_competitionsMinAggregateOutputType | null
    _max: Accred_competitionsMaxAggregateOutputType | null
  }

  type GetAccred_competitionsGroupByPayload<T extends accred_competitionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Accred_competitionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Accred_competitionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Accred_competitionsGroupByOutputType[P]>
            : GetScalarType<T[P], Accred_competitionsGroupByOutputType[P]>
        }
      >
    >


  export type accred_competitionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    event_date?: boolean
    is_active?: boolean
    created_at?: boolean
    requests?: boolean | accred_competitions$requestsArgs<ExtArgs>
    _count?: boolean | Accred_competitionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accred_competitions"]>

  export type accred_competitionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    event_date?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_competitions"]>

  export type accred_competitionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    event_date?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_competitions"]>

  export type accred_competitionsSelectScalar = {
    id?: boolean
    name?: boolean
    event_date?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type accred_competitionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "event_date" | "is_active" | "created_at", ExtArgs["result"]["accred_competitions"]>
  export type accred_competitionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | accred_competitions$requestsArgs<ExtArgs>
    _count?: boolean | Accred_competitionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accred_competitionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type accred_competitionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accred_competitionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accred_competitions"
    objects: {
      requests: Prisma.$accred_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      event_date: Date | null
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["accred_competitions"]>
    composites: {}
  }

  type accred_competitionsGetPayload<S extends boolean | null | undefined | accred_competitionsDefaultArgs> = $Result.GetResult<Prisma.$accred_competitionsPayload, S>

  type accred_competitionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accred_competitionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Accred_competitionsCountAggregateInputType | true
    }

  export interface accred_competitionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accred_competitions'], meta: { name: 'accred_competitions' } }
    /**
     * Find zero or one Accred_competitions that matches the filter.
     * @param {accred_competitionsFindUniqueArgs} args - Arguments to find a Accred_competitions
     * @example
     * // Get one Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accred_competitionsFindUniqueArgs>(args: SelectSubset<T, accred_competitionsFindUniqueArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accred_competitions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accred_competitionsFindUniqueOrThrowArgs} args - Arguments to find a Accred_competitions
     * @example
     * // Get one Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accred_competitionsFindUniqueOrThrowArgs>(args: SelectSubset<T, accred_competitionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsFindFirstArgs} args - Arguments to find a Accred_competitions
     * @example
     * // Get one Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accred_competitionsFindFirstArgs>(args?: SelectSubset<T, accred_competitionsFindFirstArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_competitions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsFindFirstOrThrowArgs} args - Arguments to find a Accred_competitions
     * @example
     * // Get one Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accred_competitionsFindFirstOrThrowArgs>(args?: SelectSubset<T, accred_competitionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accred_competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findMany()
     * 
     * // Get first 10 Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accred_competitionsWithIdOnly = await prisma.accred_competitions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accred_competitionsFindManyArgs>(args?: SelectSubset<T, accred_competitionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accred_competitions.
     * @param {accred_competitionsCreateArgs} args - Arguments to create a Accred_competitions.
     * @example
     * // Create one Accred_competitions
     * const Accred_competitions = await prisma.accred_competitions.create({
     *   data: {
     *     // ... data to create a Accred_competitions
     *   }
     * })
     * 
     */
    create<T extends accred_competitionsCreateArgs>(args: SelectSubset<T, accred_competitionsCreateArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accred_competitions.
     * @param {accred_competitionsCreateManyArgs} args - Arguments to create many Accred_competitions.
     * @example
     * // Create many Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accred_competitionsCreateManyArgs>(args?: SelectSubset<T, accred_competitionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accred_competitions and returns the data saved in the database.
     * @param {accred_competitionsCreateManyAndReturnArgs} args - Arguments to create many Accred_competitions.
     * @example
     * // Create many Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accred_competitions and only return the `id`
     * const accred_competitionsWithIdOnly = await prisma.accred_competitions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accred_competitionsCreateManyAndReturnArgs>(args?: SelectSubset<T, accred_competitionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accred_competitions.
     * @param {accred_competitionsDeleteArgs} args - Arguments to delete one Accred_competitions.
     * @example
     * // Delete one Accred_competitions
     * const Accred_competitions = await prisma.accred_competitions.delete({
     *   where: {
     *     // ... filter to delete one Accred_competitions
     *   }
     * })
     * 
     */
    delete<T extends accred_competitionsDeleteArgs>(args: SelectSubset<T, accred_competitionsDeleteArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accred_competitions.
     * @param {accred_competitionsUpdateArgs} args - Arguments to update one Accred_competitions.
     * @example
     * // Update one Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accred_competitionsUpdateArgs>(args: SelectSubset<T, accred_competitionsUpdateArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accred_competitions.
     * @param {accred_competitionsDeleteManyArgs} args - Arguments to filter Accred_competitions to delete.
     * @example
     * // Delete a few Accred_competitions
     * const { count } = await prisma.accred_competitions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accred_competitionsDeleteManyArgs>(args?: SelectSubset<T, accred_competitionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accred_competitionsUpdateManyArgs>(args: SelectSubset<T, accred_competitionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_competitions and returns the data updated in the database.
     * @param {accred_competitionsUpdateManyAndReturnArgs} args - Arguments to update many Accred_competitions.
     * @example
     * // Update many Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accred_competitions and only return the `id`
     * const accred_competitionsWithIdOnly = await prisma.accred_competitions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accred_competitionsUpdateManyAndReturnArgs>(args: SelectSubset<T, accred_competitionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accred_competitions.
     * @param {accred_competitionsUpsertArgs} args - Arguments to update or create a Accred_competitions.
     * @example
     * // Update or create a Accred_competitions
     * const accred_competitions = await prisma.accred_competitions.upsert({
     *   create: {
     *     // ... data to create a Accred_competitions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accred_competitions we want to update
     *   }
     * })
     */
    upsert<T extends accred_competitionsUpsertArgs>(args: SelectSubset<T, accred_competitionsUpsertArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accred_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsCountArgs} args - Arguments to filter Accred_competitions to count.
     * @example
     * // Count the number of Accred_competitions
     * const count = await prisma.accred_competitions.count({
     *   where: {
     *     // ... the filter for the Accred_competitions we want to count
     *   }
     * })
    **/
    count<T extends accred_competitionsCountArgs>(
      args?: Subset<T, accred_competitionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Accred_competitionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accred_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Accred_competitionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Accred_competitionsAggregateArgs>(args: Subset<T, Accred_competitionsAggregateArgs>): Prisma.PrismaPromise<GetAccred_competitionsAggregateType<T>>

    /**
     * Group by Accred_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_competitionsGroupByArgs} args - Group by arguments.
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
      T extends accred_competitionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accred_competitionsGroupByArgs['orderBy'] }
        : { orderBy?: accred_competitionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accred_competitionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccred_competitionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accred_competitions model
   */
  readonly fields: accred_competitionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accred_competitions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accred_competitionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends accred_competitions$requestsArgs<ExtArgs> = {}>(args?: Subset<T, accred_competitions$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the accred_competitions model
   */
  interface accred_competitionsFieldRefs {
    readonly id: FieldRef<"accred_competitions", 'String'>
    readonly name: FieldRef<"accred_competitions", 'String'>
    readonly event_date: FieldRef<"accred_competitions", 'DateTime'>
    readonly is_active: FieldRef<"accred_competitions", 'Boolean'>
    readonly created_at: FieldRef<"accred_competitions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accred_competitions findUnique
   */
  export type accred_competitionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_competitions to fetch.
     */
    where: accred_competitionsWhereUniqueInput
  }

  /**
   * accred_competitions findUniqueOrThrow
   */
  export type accred_competitionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_competitions to fetch.
     */
    where: accred_competitionsWhereUniqueInput
  }

  /**
   * accred_competitions findFirst
   */
  export type accred_competitionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_competitions to fetch.
     */
    where?: accred_competitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_competitions to fetch.
     */
    orderBy?: accred_competitionsOrderByWithRelationInput | accred_competitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_competitions.
     */
    cursor?: accred_competitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_competitions.
     */
    distinct?: Accred_competitionsScalarFieldEnum | Accred_competitionsScalarFieldEnum[]
  }

  /**
   * accred_competitions findFirstOrThrow
   */
  export type accred_competitionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_competitions to fetch.
     */
    where?: accred_competitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_competitions to fetch.
     */
    orderBy?: accred_competitionsOrderByWithRelationInput | accred_competitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_competitions.
     */
    cursor?: accred_competitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_competitions.
     */
    distinct?: Accred_competitionsScalarFieldEnum | Accred_competitionsScalarFieldEnum[]
  }

  /**
   * accred_competitions findMany
   */
  export type accred_competitionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_competitions to fetch.
     */
    where?: accred_competitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_competitions to fetch.
     */
    orderBy?: accred_competitionsOrderByWithRelationInput | accred_competitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accred_competitions.
     */
    cursor?: accred_competitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_competitions.
     */
    distinct?: Accred_competitionsScalarFieldEnum | Accred_competitionsScalarFieldEnum[]
  }

  /**
   * accred_competitions create
   */
  export type accred_competitionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * The data needed to create a accred_competitions.
     */
    data: XOR<accred_competitionsCreateInput, accred_competitionsUncheckedCreateInput>
  }

  /**
   * accred_competitions createMany
   */
  export type accred_competitionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accred_competitions.
     */
    data: accred_competitionsCreateManyInput | accred_competitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_competitions createManyAndReturn
   */
  export type accred_competitionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * The data used to create many accred_competitions.
     */
    data: accred_competitionsCreateManyInput | accred_competitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_competitions update
   */
  export type accred_competitionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * The data needed to update a accred_competitions.
     */
    data: XOR<accred_competitionsUpdateInput, accred_competitionsUncheckedUpdateInput>
    /**
     * Choose, which accred_competitions to update.
     */
    where: accred_competitionsWhereUniqueInput
  }

  /**
   * accred_competitions updateMany
   */
  export type accred_competitionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accred_competitions.
     */
    data: XOR<accred_competitionsUpdateManyMutationInput, accred_competitionsUncheckedUpdateManyInput>
    /**
     * Filter which accred_competitions to update
     */
    where?: accred_competitionsWhereInput
    /**
     * Limit how many accred_competitions to update.
     */
    limit?: number
  }

  /**
   * accred_competitions updateManyAndReturn
   */
  export type accred_competitionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * The data used to update accred_competitions.
     */
    data: XOR<accred_competitionsUpdateManyMutationInput, accred_competitionsUncheckedUpdateManyInput>
    /**
     * Filter which accred_competitions to update
     */
    where?: accred_competitionsWhereInput
    /**
     * Limit how many accred_competitions to update.
     */
    limit?: number
  }

  /**
   * accred_competitions upsert
   */
  export type accred_competitionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * The filter to search for the accred_competitions to update in case it exists.
     */
    where: accred_competitionsWhereUniqueInput
    /**
     * In case the accred_competitions found by the `where` argument doesn't exist, create a new accred_competitions with this data.
     */
    create: XOR<accred_competitionsCreateInput, accred_competitionsUncheckedCreateInput>
    /**
     * In case the accred_competitions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accred_competitionsUpdateInput, accred_competitionsUncheckedUpdateInput>
  }

  /**
   * accred_competitions delete
   */
  export type accred_competitionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
    /**
     * Filter which accred_competitions to delete.
     */
    where: accred_competitionsWhereUniqueInput
  }

  /**
   * accred_competitions deleteMany
   */
  export type accred_competitionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_competitions to delete
     */
    where?: accred_competitionsWhereInput
    /**
     * Limit how many accred_competitions to delete.
     */
    limit?: number
  }

  /**
   * accred_competitions.requests
   */
  export type accred_competitions$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    where?: accred_requestsWhereInput
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    cursor?: accred_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Accred_requestsScalarFieldEnum | Accred_requestsScalarFieldEnum[]
  }

  /**
   * accred_competitions without action
   */
  export type accred_competitionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_competitions
     */
    select?: accred_competitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_competitions
     */
    omit?: accred_competitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_competitionsInclude<ExtArgs> | null
  }


  /**
   * Model accred_functions
   */

  export type AggregateAccred_functions = {
    _count: Accred_functionsCountAggregateOutputType | null
    _min: Accred_functionsMinAggregateOutputType | null
    _max: Accred_functionsMaxAggregateOutputType | null
  }

  export type Accred_functionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Accred_functionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Accred_functionsCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Accred_functionsMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
  }

  export type Accred_functionsMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
  }

  export type Accred_functionsCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Accred_functionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_functions to aggregate.
     */
    where?: accred_functionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_functions to fetch.
     */
    orderBy?: accred_functionsOrderByWithRelationInput | accred_functionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accred_functionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accred_functions
    **/
    _count?: true | Accred_functionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Accred_functionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Accred_functionsMaxAggregateInputType
  }

  export type GetAccred_functionsAggregateType<T extends Accred_functionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccred_functions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccred_functions[P]>
      : GetScalarType<T[P], AggregateAccred_functions[P]>
  }




  export type accred_functionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_functionsWhereInput
    orderBy?: accred_functionsOrderByWithAggregationInput | accred_functionsOrderByWithAggregationInput[]
    by: Accred_functionsScalarFieldEnum[] | Accred_functionsScalarFieldEnum
    having?: accred_functionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Accred_functionsCountAggregateInputType | true
    _min?: Accred_functionsMinAggregateInputType
    _max?: Accred_functionsMaxAggregateInputType
  }

  export type Accred_functionsGroupByOutputType = {
    id: string
    name: string
    is_active: boolean | null
    created_at: Date | null
    _count: Accred_functionsCountAggregateOutputType | null
    _min: Accred_functionsMinAggregateOutputType | null
    _max: Accred_functionsMaxAggregateOutputType | null
  }

  type GetAccred_functionsGroupByPayload<T extends accred_functionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Accred_functionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Accred_functionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Accred_functionsGroupByOutputType[P]>
            : GetScalarType<T[P], Accred_functionsGroupByOutputType[P]>
        }
      >
    >


  export type accred_functionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    requests?: boolean | accred_functions$requestsArgs<ExtArgs>
    _count?: boolean | Accred_functionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accred_functions"]>

  export type accred_functionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_functions"]>

  export type accred_functionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_functions"]>

  export type accred_functionsSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type accred_functionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at", ExtArgs["result"]["accred_functions"]>
  export type accred_functionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | accred_functions$requestsArgs<ExtArgs>
    _count?: boolean | Accred_functionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accred_functionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type accred_functionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accred_functionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accred_functions"
    objects: {
      requests: Prisma.$accred_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["accred_functions"]>
    composites: {}
  }

  type accred_functionsGetPayload<S extends boolean | null | undefined | accred_functionsDefaultArgs> = $Result.GetResult<Prisma.$accred_functionsPayload, S>

  type accred_functionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accred_functionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Accred_functionsCountAggregateInputType | true
    }

  export interface accred_functionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accred_functions'], meta: { name: 'accred_functions' } }
    /**
     * Find zero or one Accred_functions that matches the filter.
     * @param {accred_functionsFindUniqueArgs} args - Arguments to find a Accred_functions
     * @example
     * // Get one Accred_functions
     * const accred_functions = await prisma.accred_functions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accred_functionsFindUniqueArgs>(args: SelectSubset<T, accred_functionsFindUniqueArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accred_functions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accred_functionsFindUniqueOrThrowArgs} args - Arguments to find a Accred_functions
     * @example
     * // Get one Accred_functions
     * const accred_functions = await prisma.accred_functions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accred_functionsFindUniqueOrThrowArgs>(args: SelectSubset<T, accred_functionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_functions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsFindFirstArgs} args - Arguments to find a Accred_functions
     * @example
     * // Get one Accred_functions
     * const accred_functions = await prisma.accred_functions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accred_functionsFindFirstArgs>(args?: SelectSubset<T, accred_functionsFindFirstArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_functions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsFindFirstOrThrowArgs} args - Arguments to find a Accred_functions
     * @example
     * // Get one Accred_functions
     * const accred_functions = await prisma.accred_functions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accred_functionsFindFirstOrThrowArgs>(args?: SelectSubset<T, accred_functionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accred_functions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accred_functions
     * const accred_functions = await prisma.accred_functions.findMany()
     * 
     * // Get first 10 Accred_functions
     * const accred_functions = await prisma.accred_functions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accred_functionsWithIdOnly = await prisma.accred_functions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accred_functionsFindManyArgs>(args?: SelectSubset<T, accred_functionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accred_functions.
     * @param {accred_functionsCreateArgs} args - Arguments to create a Accred_functions.
     * @example
     * // Create one Accred_functions
     * const Accred_functions = await prisma.accred_functions.create({
     *   data: {
     *     // ... data to create a Accred_functions
     *   }
     * })
     * 
     */
    create<T extends accred_functionsCreateArgs>(args: SelectSubset<T, accred_functionsCreateArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accred_functions.
     * @param {accred_functionsCreateManyArgs} args - Arguments to create many Accred_functions.
     * @example
     * // Create many Accred_functions
     * const accred_functions = await prisma.accred_functions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accred_functionsCreateManyArgs>(args?: SelectSubset<T, accred_functionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accred_functions and returns the data saved in the database.
     * @param {accred_functionsCreateManyAndReturnArgs} args - Arguments to create many Accred_functions.
     * @example
     * // Create many Accred_functions
     * const accred_functions = await prisma.accred_functions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accred_functions and only return the `id`
     * const accred_functionsWithIdOnly = await prisma.accred_functions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accred_functionsCreateManyAndReturnArgs>(args?: SelectSubset<T, accred_functionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accred_functions.
     * @param {accred_functionsDeleteArgs} args - Arguments to delete one Accred_functions.
     * @example
     * // Delete one Accred_functions
     * const Accred_functions = await prisma.accred_functions.delete({
     *   where: {
     *     // ... filter to delete one Accred_functions
     *   }
     * })
     * 
     */
    delete<T extends accred_functionsDeleteArgs>(args: SelectSubset<T, accred_functionsDeleteArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accred_functions.
     * @param {accred_functionsUpdateArgs} args - Arguments to update one Accred_functions.
     * @example
     * // Update one Accred_functions
     * const accred_functions = await prisma.accred_functions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accred_functionsUpdateArgs>(args: SelectSubset<T, accred_functionsUpdateArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accred_functions.
     * @param {accred_functionsDeleteManyArgs} args - Arguments to filter Accred_functions to delete.
     * @example
     * // Delete a few Accred_functions
     * const { count } = await prisma.accred_functions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accred_functionsDeleteManyArgs>(args?: SelectSubset<T, accred_functionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accred_functions
     * const accred_functions = await prisma.accred_functions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accred_functionsUpdateManyArgs>(args: SelectSubset<T, accred_functionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_functions and returns the data updated in the database.
     * @param {accred_functionsUpdateManyAndReturnArgs} args - Arguments to update many Accred_functions.
     * @example
     * // Update many Accred_functions
     * const accred_functions = await prisma.accred_functions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accred_functions and only return the `id`
     * const accred_functionsWithIdOnly = await prisma.accred_functions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accred_functionsUpdateManyAndReturnArgs>(args: SelectSubset<T, accred_functionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accred_functions.
     * @param {accred_functionsUpsertArgs} args - Arguments to update or create a Accred_functions.
     * @example
     * // Update or create a Accred_functions
     * const accred_functions = await prisma.accred_functions.upsert({
     *   create: {
     *     // ... data to create a Accred_functions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accred_functions we want to update
     *   }
     * })
     */
    upsert<T extends accred_functionsUpsertArgs>(args: SelectSubset<T, accred_functionsUpsertArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accred_functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsCountArgs} args - Arguments to filter Accred_functions to count.
     * @example
     * // Count the number of Accred_functions
     * const count = await prisma.accred_functions.count({
     *   where: {
     *     // ... the filter for the Accred_functions we want to count
     *   }
     * })
    **/
    count<T extends accred_functionsCountArgs>(
      args?: Subset<T, accred_functionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Accred_functionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accred_functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Accred_functionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Accred_functionsAggregateArgs>(args: Subset<T, Accred_functionsAggregateArgs>): Prisma.PrismaPromise<GetAccred_functionsAggregateType<T>>

    /**
     * Group by Accred_functions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_functionsGroupByArgs} args - Group by arguments.
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
      T extends accred_functionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accred_functionsGroupByArgs['orderBy'] }
        : { orderBy?: accred_functionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accred_functionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccred_functionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accred_functions model
   */
  readonly fields: accred_functionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accred_functions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accred_functionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends accred_functions$requestsArgs<ExtArgs> = {}>(args?: Subset<T, accred_functions$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the accred_functions model
   */
  interface accred_functionsFieldRefs {
    readonly id: FieldRef<"accred_functions", 'String'>
    readonly name: FieldRef<"accred_functions", 'String'>
    readonly is_active: FieldRef<"accred_functions", 'Boolean'>
    readonly created_at: FieldRef<"accred_functions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accred_functions findUnique
   */
  export type accred_functionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_functions to fetch.
     */
    where: accred_functionsWhereUniqueInput
  }

  /**
   * accred_functions findUniqueOrThrow
   */
  export type accred_functionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_functions to fetch.
     */
    where: accred_functionsWhereUniqueInput
  }

  /**
   * accred_functions findFirst
   */
  export type accred_functionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_functions to fetch.
     */
    where?: accred_functionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_functions to fetch.
     */
    orderBy?: accred_functionsOrderByWithRelationInput | accred_functionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_functions.
     */
    cursor?: accred_functionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_functions.
     */
    distinct?: Accred_functionsScalarFieldEnum | Accred_functionsScalarFieldEnum[]
  }

  /**
   * accred_functions findFirstOrThrow
   */
  export type accred_functionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_functions to fetch.
     */
    where?: accred_functionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_functions to fetch.
     */
    orderBy?: accred_functionsOrderByWithRelationInput | accred_functionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_functions.
     */
    cursor?: accred_functionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_functions.
     */
    distinct?: Accred_functionsScalarFieldEnum | Accred_functionsScalarFieldEnum[]
  }

  /**
   * accred_functions findMany
   */
  export type accred_functionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter, which accred_functions to fetch.
     */
    where?: accred_functionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_functions to fetch.
     */
    orderBy?: accred_functionsOrderByWithRelationInput | accred_functionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accred_functions.
     */
    cursor?: accred_functionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_functions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_functions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_functions.
     */
    distinct?: Accred_functionsScalarFieldEnum | Accred_functionsScalarFieldEnum[]
  }

  /**
   * accred_functions create
   */
  export type accred_functionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * The data needed to create a accred_functions.
     */
    data: XOR<accred_functionsCreateInput, accred_functionsUncheckedCreateInput>
  }

  /**
   * accred_functions createMany
   */
  export type accred_functionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accred_functions.
     */
    data: accred_functionsCreateManyInput | accred_functionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_functions createManyAndReturn
   */
  export type accred_functionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * The data used to create many accred_functions.
     */
    data: accred_functionsCreateManyInput | accred_functionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_functions update
   */
  export type accred_functionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * The data needed to update a accred_functions.
     */
    data: XOR<accred_functionsUpdateInput, accred_functionsUncheckedUpdateInput>
    /**
     * Choose, which accred_functions to update.
     */
    where: accred_functionsWhereUniqueInput
  }

  /**
   * accred_functions updateMany
   */
  export type accred_functionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accred_functions.
     */
    data: XOR<accred_functionsUpdateManyMutationInput, accred_functionsUncheckedUpdateManyInput>
    /**
     * Filter which accred_functions to update
     */
    where?: accred_functionsWhereInput
    /**
     * Limit how many accred_functions to update.
     */
    limit?: number
  }

  /**
   * accred_functions updateManyAndReturn
   */
  export type accred_functionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * The data used to update accred_functions.
     */
    data: XOR<accred_functionsUpdateManyMutationInput, accred_functionsUncheckedUpdateManyInput>
    /**
     * Filter which accred_functions to update
     */
    where?: accred_functionsWhereInput
    /**
     * Limit how many accred_functions to update.
     */
    limit?: number
  }

  /**
   * accred_functions upsert
   */
  export type accred_functionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * The filter to search for the accred_functions to update in case it exists.
     */
    where: accred_functionsWhereUniqueInput
    /**
     * In case the accred_functions found by the `where` argument doesn't exist, create a new accred_functions with this data.
     */
    create: XOR<accred_functionsCreateInput, accred_functionsUncheckedCreateInput>
    /**
     * In case the accred_functions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accred_functionsUpdateInput, accred_functionsUncheckedUpdateInput>
  }

  /**
   * accred_functions delete
   */
  export type accred_functionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
    /**
     * Filter which accred_functions to delete.
     */
    where: accred_functionsWhereUniqueInput
  }

  /**
   * accred_functions deleteMany
   */
  export type accred_functionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_functions to delete
     */
    where?: accred_functionsWhereInput
    /**
     * Limit how many accred_functions to delete.
     */
    limit?: number
  }

  /**
   * accred_functions.requests
   */
  export type accred_functions$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    where?: accred_requestsWhereInput
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    cursor?: accred_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Accred_requestsScalarFieldEnum | Accred_requestsScalarFieldEnum[]
  }

  /**
   * accred_functions without action
   */
  export type accred_functionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_functions
     */
    select?: accred_functionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_functions
     */
    omit?: accred_functionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_functionsInclude<ExtArgs> | null
  }


  /**
   * Model accred_admins
   */

  export type AggregateAccred_admins = {
    _count: Accred_adminsCountAggregateOutputType | null
    _min: Accred_adminsMinAggregateOutputType | null
    _max: Accred_adminsMaxAggregateOutputType | null
  }

  export type Accred_adminsMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    created_at: Date | null
  }

  export type Accred_adminsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    created_at: Date | null
  }

  export type Accred_adminsCountAggregateOutputType = {
    id: number
    email: number
    role: number
    created_at: number
    _all: number
  }


  export type Accred_adminsMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type Accred_adminsMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type Accred_adminsCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type Accred_adminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_admins to aggregate.
     */
    where?: accred_adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_admins to fetch.
     */
    orderBy?: accred_adminsOrderByWithRelationInput | accred_adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accred_adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accred_admins
    **/
    _count?: true | Accred_adminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Accred_adminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Accred_adminsMaxAggregateInputType
  }

  export type GetAccred_adminsAggregateType<T extends Accred_adminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccred_admins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccred_admins[P]>
      : GetScalarType<T[P], AggregateAccred_admins[P]>
  }




  export type accred_adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_adminsWhereInput
    orderBy?: accred_adminsOrderByWithAggregationInput | accred_adminsOrderByWithAggregationInput[]
    by: Accred_adminsScalarFieldEnum[] | Accred_adminsScalarFieldEnum
    having?: accred_adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Accred_adminsCountAggregateInputType | true
    _min?: Accred_adminsMinAggregateInputType
    _max?: Accred_adminsMaxAggregateInputType
  }

  export type Accred_adminsGroupByOutputType = {
    id: string
    email: string
    role: string
    created_at: Date | null
    _count: Accred_adminsCountAggregateOutputType | null
    _min: Accred_adminsMinAggregateOutputType | null
    _max: Accred_adminsMaxAggregateOutputType | null
  }

  type GetAccred_adminsGroupByPayload<T extends accred_adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Accred_adminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Accred_adminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Accred_adminsGroupByOutputType[P]>
            : GetScalarType<T[P], Accred_adminsGroupByOutputType[P]>
        }
      >
    >


  export type accred_adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_admins"]>

  export type accred_adminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_admins"]>

  export type accred_adminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accred_admins"]>

  export type accred_adminsSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type accred_adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "created_at", ExtArgs["result"]["accred_admins"]>

  export type $accred_adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accred_admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string
      created_at: Date | null
    }, ExtArgs["result"]["accred_admins"]>
    composites: {}
  }

  type accred_adminsGetPayload<S extends boolean | null | undefined | accred_adminsDefaultArgs> = $Result.GetResult<Prisma.$accred_adminsPayload, S>

  type accred_adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accred_adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Accred_adminsCountAggregateInputType | true
    }

  export interface accred_adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accred_admins'], meta: { name: 'accred_admins' } }
    /**
     * Find zero or one Accred_admins that matches the filter.
     * @param {accred_adminsFindUniqueArgs} args - Arguments to find a Accred_admins
     * @example
     * // Get one Accred_admins
     * const accred_admins = await prisma.accred_admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accred_adminsFindUniqueArgs>(args: SelectSubset<T, accred_adminsFindUniqueArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accred_admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accred_adminsFindUniqueOrThrowArgs} args - Arguments to find a Accred_admins
     * @example
     * // Get one Accred_admins
     * const accred_admins = await prisma.accred_admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accred_adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, accred_adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsFindFirstArgs} args - Arguments to find a Accred_admins
     * @example
     * // Get one Accred_admins
     * const accred_admins = await prisma.accred_admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accred_adminsFindFirstArgs>(args?: SelectSubset<T, accred_adminsFindFirstArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsFindFirstOrThrowArgs} args - Arguments to find a Accred_admins
     * @example
     * // Get one Accred_admins
     * const accred_admins = await prisma.accred_admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accred_adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, accred_adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accred_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accred_admins
     * const accred_admins = await prisma.accred_admins.findMany()
     * 
     * // Get first 10 Accred_admins
     * const accred_admins = await prisma.accred_admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accred_adminsWithIdOnly = await prisma.accred_admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accred_adminsFindManyArgs>(args?: SelectSubset<T, accred_adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accred_admins.
     * @param {accred_adminsCreateArgs} args - Arguments to create a Accred_admins.
     * @example
     * // Create one Accred_admins
     * const Accred_admins = await prisma.accred_admins.create({
     *   data: {
     *     // ... data to create a Accred_admins
     *   }
     * })
     * 
     */
    create<T extends accred_adminsCreateArgs>(args: SelectSubset<T, accred_adminsCreateArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accred_admins.
     * @param {accred_adminsCreateManyArgs} args - Arguments to create many Accred_admins.
     * @example
     * // Create many Accred_admins
     * const accred_admins = await prisma.accred_admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accred_adminsCreateManyArgs>(args?: SelectSubset<T, accred_adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accred_admins and returns the data saved in the database.
     * @param {accred_adminsCreateManyAndReturnArgs} args - Arguments to create many Accred_admins.
     * @example
     * // Create many Accred_admins
     * const accred_admins = await prisma.accred_admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accred_admins and only return the `id`
     * const accred_adminsWithIdOnly = await prisma.accred_admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accred_adminsCreateManyAndReturnArgs>(args?: SelectSubset<T, accred_adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accred_admins.
     * @param {accred_adminsDeleteArgs} args - Arguments to delete one Accred_admins.
     * @example
     * // Delete one Accred_admins
     * const Accred_admins = await prisma.accred_admins.delete({
     *   where: {
     *     // ... filter to delete one Accred_admins
     *   }
     * })
     * 
     */
    delete<T extends accred_adminsDeleteArgs>(args: SelectSubset<T, accred_adminsDeleteArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accred_admins.
     * @param {accred_adminsUpdateArgs} args - Arguments to update one Accred_admins.
     * @example
     * // Update one Accred_admins
     * const accred_admins = await prisma.accred_admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accred_adminsUpdateArgs>(args: SelectSubset<T, accred_adminsUpdateArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accred_admins.
     * @param {accred_adminsDeleteManyArgs} args - Arguments to filter Accred_admins to delete.
     * @example
     * // Delete a few Accred_admins
     * const { count } = await prisma.accred_admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accred_adminsDeleteManyArgs>(args?: SelectSubset<T, accred_adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accred_admins
     * const accred_admins = await prisma.accred_admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accred_adminsUpdateManyArgs>(args: SelectSubset<T, accred_adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_admins and returns the data updated in the database.
     * @param {accred_adminsUpdateManyAndReturnArgs} args - Arguments to update many Accred_admins.
     * @example
     * // Update many Accred_admins
     * const accred_admins = await prisma.accred_admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accred_admins and only return the `id`
     * const accred_adminsWithIdOnly = await prisma.accred_admins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accred_adminsUpdateManyAndReturnArgs>(args: SelectSubset<T, accred_adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accred_admins.
     * @param {accred_adminsUpsertArgs} args - Arguments to update or create a Accred_admins.
     * @example
     * // Update or create a Accred_admins
     * const accred_admins = await prisma.accred_admins.upsert({
     *   create: {
     *     // ... data to create a Accred_admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accred_admins we want to update
     *   }
     * })
     */
    upsert<T extends accred_adminsUpsertArgs>(args: SelectSubset<T, accred_adminsUpsertArgs<ExtArgs>>): Prisma__accred_adminsClient<$Result.GetResult<Prisma.$accred_adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accred_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsCountArgs} args - Arguments to filter Accred_admins to count.
     * @example
     * // Count the number of Accred_admins
     * const count = await prisma.accred_admins.count({
     *   where: {
     *     // ... the filter for the Accred_admins we want to count
     *   }
     * })
    **/
    count<T extends accred_adminsCountArgs>(
      args?: Subset<T, accred_adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Accred_adminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accred_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Accred_adminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Accred_adminsAggregateArgs>(args: Subset<T, Accred_adminsAggregateArgs>): Prisma.PrismaPromise<GetAccred_adminsAggregateType<T>>

    /**
     * Group by Accred_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_adminsGroupByArgs} args - Group by arguments.
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
      T extends accred_adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accred_adminsGroupByArgs['orderBy'] }
        : { orderBy?: accred_adminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accred_adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccred_adminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accred_admins model
   */
  readonly fields: accred_adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accred_admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accred_adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the accred_admins model
   */
  interface accred_adminsFieldRefs {
    readonly id: FieldRef<"accred_admins", 'String'>
    readonly email: FieldRef<"accred_admins", 'String'>
    readonly role: FieldRef<"accred_admins", 'String'>
    readonly created_at: FieldRef<"accred_admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accred_admins findUnique
   */
  export type accred_adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter, which accred_admins to fetch.
     */
    where: accred_adminsWhereUniqueInput
  }

  /**
   * accred_admins findUniqueOrThrow
   */
  export type accred_adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter, which accred_admins to fetch.
     */
    where: accred_adminsWhereUniqueInput
  }

  /**
   * accred_admins findFirst
   */
  export type accred_adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter, which accred_admins to fetch.
     */
    where?: accred_adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_admins to fetch.
     */
    orderBy?: accred_adminsOrderByWithRelationInput | accred_adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_admins.
     */
    cursor?: accred_adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_admins.
     */
    distinct?: Accred_adminsScalarFieldEnum | Accred_adminsScalarFieldEnum[]
  }

  /**
   * accred_admins findFirstOrThrow
   */
  export type accred_adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter, which accred_admins to fetch.
     */
    where?: accred_adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_admins to fetch.
     */
    orderBy?: accred_adminsOrderByWithRelationInput | accred_adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_admins.
     */
    cursor?: accred_adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_admins.
     */
    distinct?: Accred_adminsScalarFieldEnum | Accred_adminsScalarFieldEnum[]
  }

  /**
   * accred_admins findMany
   */
  export type accred_adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter, which accred_admins to fetch.
     */
    where?: accred_adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_admins to fetch.
     */
    orderBy?: accred_adminsOrderByWithRelationInput | accred_adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accred_admins.
     */
    cursor?: accred_adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_admins.
     */
    distinct?: Accred_adminsScalarFieldEnum | Accred_adminsScalarFieldEnum[]
  }

  /**
   * accred_admins create
   */
  export type accred_adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * The data needed to create a accred_admins.
     */
    data: XOR<accred_adminsCreateInput, accred_adminsUncheckedCreateInput>
  }

  /**
   * accred_admins createMany
   */
  export type accred_adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accred_admins.
     */
    data: accred_adminsCreateManyInput | accred_adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_admins createManyAndReturn
   */
  export type accred_adminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * The data used to create many accred_admins.
     */
    data: accred_adminsCreateManyInput | accred_adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_admins update
   */
  export type accred_adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * The data needed to update a accred_admins.
     */
    data: XOR<accred_adminsUpdateInput, accred_adminsUncheckedUpdateInput>
    /**
     * Choose, which accred_admins to update.
     */
    where: accred_adminsWhereUniqueInput
  }

  /**
   * accred_admins updateMany
   */
  export type accred_adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accred_admins.
     */
    data: XOR<accred_adminsUpdateManyMutationInput, accred_adminsUncheckedUpdateManyInput>
    /**
     * Filter which accred_admins to update
     */
    where?: accred_adminsWhereInput
    /**
     * Limit how many accred_admins to update.
     */
    limit?: number
  }

  /**
   * accred_admins updateManyAndReturn
   */
  export type accred_adminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * The data used to update accred_admins.
     */
    data: XOR<accred_adminsUpdateManyMutationInput, accred_adminsUncheckedUpdateManyInput>
    /**
     * Filter which accred_admins to update
     */
    where?: accred_adminsWhereInput
    /**
     * Limit how many accred_admins to update.
     */
    limit?: number
  }

  /**
   * accred_admins upsert
   */
  export type accred_adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * The filter to search for the accred_admins to update in case it exists.
     */
    where: accred_adminsWhereUniqueInput
    /**
     * In case the accred_admins found by the `where` argument doesn't exist, create a new accred_admins with this data.
     */
    create: XOR<accred_adminsCreateInput, accred_adminsUncheckedCreateInput>
    /**
     * In case the accred_admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accred_adminsUpdateInput, accred_adminsUncheckedUpdateInput>
  }

  /**
   * accred_admins delete
   */
  export type accred_adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
    /**
     * Filter which accred_admins to delete.
     */
    where: accred_adminsWhereUniqueInput
  }

  /**
   * accred_admins deleteMany
   */
  export type accred_adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_admins to delete
     */
    where?: accred_adminsWhereInput
    /**
     * Limit how many accred_admins to delete.
     */
    limit?: number
  }

  /**
   * accred_admins without action
   */
  export type accred_adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_admins
     */
    select?: accred_adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_admins
     */
    omit?: accred_adminsOmit<ExtArgs> | null
  }


  /**
   * Model accred_requests
   */

  export type AggregateAccred_requests = {
    _count: Accred_requestsCountAggregateOutputType | null
    _min: Accred_requestsMinAggregateOutputType | null
    _max: Accred_requestsMaxAggregateOutputType | null
  }

  export type Accred_requestsMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    organization: string | null
    function_id: string | null
    photo_url: string | null
    competition_id: string | null
    match_name: string | null
    status: string | null
    response_message: string | null
    zone_terrain: boolean | null
    zone_tribune: boolean | null
    zone_vestiaires: boolean | null
    badge_pdf_url: string | null
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date | null
  }

  export type Accred_requestsMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    organization: string | null
    function_id: string | null
    photo_url: string | null
    competition_id: string | null
    match_name: string | null
    status: string | null
    response_message: string | null
    zone_terrain: boolean | null
    zone_tribune: boolean | null
    zone_vestiaires: boolean | null
    badge_pdf_url: string | null
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date | null
  }

  export type Accred_requestsCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    organization: number
    function_id: number
    photo_url: number
    competition_id: number
    match_name: number
    status: number
    response_message: number
    zone_terrain: number
    zone_tribune: number
    zone_vestiaires: number
    badge_pdf_url: number
    reviewed_by: number
    reviewed_at: number
    created_at: number
    _all: number
  }


  export type Accred_requestsMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    organization?: true
    function_id?: true
    photo_url?: true
    competition_id?: true
    match_name?: true
    status?: true
    response_message?: true
    zone_terrain?: true
    zone_tribune?: true
    zone_vestiaires?: true
    badge_pdf_url?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
  }

  export type Accred_requestsMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    organization?: true
    function_id?: true
    photo_url?: true
    competition_id?: true
    match_name?: true
    status?: true
    response_message?: true
    zone_terrain?: true
    zone_tribune?: true
    zone_vestiaires?: true
    badge_pdf_url?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
  }

  export type Accred_requestsCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    organization?: true
    function_id?: true
    photo_url?: true
    competition_id?: true
    match_name?: true
    status?: true
    response_message?: true
    zone_terrain?: true
    zone_tribune?: true
    zone_vestiaires?: true
    badge_pdf_url?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
    _all?: true
  }

  export type Accred_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_requests to aggregate.
     */
    where?: accred_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_requests to fetch.
     */
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accred_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accred_requests
    **/
    _count?: true | Accred_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Accred_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Accred_requestsMaxAggregateInputType
  }

  export type GetAccred_requestsAggregateType<T extends Accred_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccred_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccred_requests[P]>
      : GetScalarType<T[P], AggregateAccred_requests[P]>
  }




  export type accred_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accred_requestsWhereInput
    orderBy?: accred_requestsOrderByWithAggregationInput | accred_requestsOrderByWithAggregationInput[]
    by: Accred_requestsScalarFieldEnum[] | Accred_requestsScalarFieldEnum
    having?: accred_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Accred_requestsCountAggregateInputType | true
    _min?: Accred_requestsMinAggregateInputType
    _max?: Accred_requestsMaxAggregateInputType
  }

  export type Accred_requestsGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string | null
    organization: string
    function_id: string
    photo_url: string
    competition_id: string
    match_name: string
    status: string
    response_message: string | null
    zone_terrain: boolean
    zone_tribune: boolean
    zone_vestiaires: boolean
    badge_pdf_url: string | null
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date
    _count: Accred_requestsCountAggregateOutputType | null
    _min: Accred_requestsMinAggregateOutputType | null
    _max: Accred_requestsMaxAggregateOutputType | null
  }

  type GetAccred_requestsGroupByPayload<T extends accred_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Accred_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Accred_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Accred_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Accred_requestsGroupByOutputType[P]>
        }
      >
    >


  export type accred_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    function_id?: boolean
    photo_url?: boolean
    competition_id?: boolean
    match_name?: boolean
    status?: boolean
    response_message?: boolean
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accred_requests"]>

  export type accred_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    function_id?: boolean
    photo_url?: boolean
    competition_id?: boolean
    match_name?: boolean
    status?: boolean
    response_message?: boolean
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accred_requests"]>

  export type accred_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    function_id?: boolean
    photo_url?: boolean
    competition_id?: boolean
    match_name?: boolean
    status?: boolean
    response_message?: boolean
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accred_requests"]>

  export type accred_requestsSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    function_id?: boolean
    photo_url?: boolean
    competition_id?: boolean
    match_name?: boolean
    status?: boolean
    response_message?: boolean
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
  }

  export type accred_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone" | "organization" | "function_id" | "photo_url" | "competition_id" | "match_name" | "status" | "response_message" | "zone_terrain" | "zone_tribune" | "zone_vestiaires" | "badge_pdf_url" | "reviewed_by" | "reviewed_at" | "created_at", ExtArgs["result"]["accred_requests"]>
  export type accred_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }
  export type accred_requestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }
  export type accred_requestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | accred_competitionsDefaultArgs<ExtArgs>
    function?: boolean | accred_functionsDefaultArgs<ExtArgs>
  }

  export type $accred_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accred_requests"
    objects: {
      competition: Prisma.$accred_competitionsPayload<ExtArgs>
      function: Prisma.$accred_functionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      phone: string | null
      organization: string
      function_id: string
      photo_url: string
      competition_id: string
      match_name: string
      status: string
      response_message: string | null
      zone_terrain: boolean
      zone_tribune: boolean
      zone_vestiaires: boolean
      badge_pdf_url: string | null
      reviewed_by: string | null
      reviewed_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["accred_requests"]>
    composites: {}
  }

  type accred_requestsGetPayload<S extends boolean | null | undefined | accred_requestsDefaultArgs> = $Result.GetResult<Prisma.$accred_requestsPayload, S>

  type accred_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accred_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Accred_requestsCountAggregateInputType | true
    }

  export interface accred_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accred_requests'], meta: { name: 'accred_requests' } }
    /**
     * Find zero or one Accred_requests that matches the filter.
     * @param {accred_requestsFindUniqueArgs} args - Arguments to find a Accred_requests
     * @example
     * // Get one Accred_requests
     * const accred_requests = await prisma.accred_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accred_requestsFindUniqueArgs>(args: SelectSubset<T, accred_requestsFindUniqueArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accred_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accred_requestsFindUniqueOrThrowArgs} args - Arguments to find a Accred_requests
     * @example
     * // Get one Accred_requests
     * const accred_requests = await prisma.accred_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accred_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, accred_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsFindFirstArgs} args - Arguments to find a Accred_requests
     * @example
     * // Get one Accred_requests
     * const accred_requests = await prisma.accred_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accred_requestsFindFirstArgs>(args?: SelectSubset<T, accred_requestsFindFirstArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accred_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsFindFirstOrThrowArgs} args - Arguments to find a Accred_requests
     * @example
     * // Get one Accred_requests
     * const accred_requests = await prisma.accred_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accred_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, accred_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accred_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accred_requests
     * const accred_requests = await prisma.accred_requests.findMany()
     * 
     * // Get first 10 Accred_requests
     * const accred_requests = await prisma.accred_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accred_requestsWithIdOnly = await prisma.accred_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accred_requestsFindManyArgs>(args?: SelectSubset<T, accred_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accred_requests.
     * @param {accred_requestsCreateArgs} args - Arguments to create a Accred_requests.
     * @example
     * // Create one Accred_requests
     * const Accred_requests = await prisma.accred_requests.create({
     *   data: {
     *     // ... data to create a Accred_requests
     *   }
     * })
     * 
     */
    create<T extends accred_requestsCreateArgs>(args: SelectSubset<T, accred_requestsCreateArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accred_requests.
     * @param {accred_requestsCreateManyArgs} args - Arguments to create many Accred_requests.
     * @example
     * // Create many Accred_requests
     * const accred_requests = await prisma.accred_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accred_requestsCreateManyArgs>(args?: SelectSubset<T, accred_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accred_requests and returns the data saved in the database.
     * @param {accred_requestsCreateManyAndReturnArgs} args - Arguments to create many Accred_requests.
     * @example
     * // Create many Accred_requests
     * const accred_requests = await prisma.accred_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accred_requests and only return the `id`
     * const accred_requestsWithIdOnly = await prisma.accred_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accred_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, accred_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accred_requests.
     * @param {accred_requestsDeleteArgs} args - Arguments to delete one Accred_requests.
     * @example
     * // Delete one Accred_requests
     * const Accred_requests = await prisma.accred_requests.delete({
     *   where: {
     *     // ... filter to delete one Accred_requests
     *   }
     * })
     * 
     */
    delete<T extends accred_requestsDeleteArgs>(args: SelectSubset<T, accred_requestsDeleteArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accred_requests.
     * @param {accred_requestsUpdateArgs} args - Arguments to update one Accred_requests.
     * @example
     * // Update one Accred_requests
     * const accred_requests = await prisma.accred_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accred_requestsUpdateArgs>(args: SelectSubset<T, accred_requestsUpdateArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accred_requests.
     * @param {accred_requestsDeleteManyArgs} args - Arguments to filter Accred_requests to delete.
     * @example
     * // Delete a few Accred_requests
     * const { count } = await prisma.accred_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accred_requestsDeleteManyArgs>(args?: SelectSubset<T, accred_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accred_requests
     * const accred_requests = await prisma.accred_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accred_requestsUpdateManyArgs>(args: SelectSubset<T, accred_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accred_requests and returns the data updated in the database.
     * @param {accred_requestsUpdateManyAndReturnArgs} args - Arguments to update many Accred_requests.
     * @example
     * // Update many Accred_requests
     * const accred_requests = await prisma.accred_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accred_requests and only return the `id`
     * const accred_requestsWithIdOnly = await prisma.accred_requests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accred_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, accred_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accred_requests.
     * @param {accred_requestsUpsertArgs} args - Arguments to update or create a Accred_requests.
     * @example
     * // Update or create a Accred_requests
     * const accred_requests = await prisma.accred_requests.upsert({
     *   create: {
     *     // ... data to create a Accred_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accred_requests we want to update
     *   }
     * })
     */
    upsert<T extends accred_requestsUpsertArgs>(args: SelectSubset<T, accred_requestsUpsertArgs<ExtArgs>>): Prisma__accred_requestsClient<$Result.GetResult<Prisma.$accred_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accred_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsCountArgs} args - Arguments to filter Accred_requests to count.
     * @example
     * // Count the number of Accred_requests
     * const count = await prisma.accred_requests.count({
     *   where: {
     *     // ... the filter for the Accred_requests we want to count
     *   }
     * })
    **/
    count<T extends accred_requestsCountArgs>(
      args?: Subset<T, accred_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Accred_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accred_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Accred_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Accred_requestsAggregateArgs>(args: Subset<T, Accred_requestsAggregateArgs>): Prisma.PrismaPromise<GetAccred_requestsAggregateType<T>>

    /**
     * Group by Accred_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accred_requestsGroupByArgs} args - Group by arguments.
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
      T extends accred_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accred_requestsGroupByArgs['orderBy'] }
        : { orderBy?: accred_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accred_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccred_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accred_requests model
   */
  readonly fields: accred_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accred_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accred_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends accred_competitionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accred_competitionsDefaultArgs<ExtArgs>>): Prisma__accred_competitionsClient<$Result.GetResult<Prisma.$accred_competitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    function<T extends accred_functionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accred_functionsDefaultArgs<ExtArgs>>): Prisma__accred_functionsClient<$Result.GetResult<Prisma.$accred_functionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the accred_requests model
   */
  interface accred_requestsFieldRefs {
    readonly id: FieldRef<"accred_requests", 'String'>
    readonly first_name: FieldRef<"accred_requests", 'String'>
    readonly last_name: FieldRef<"accred_requests", 'String'>
    readonly email: FieldRef<"accred_requests", 'String'>
    readonly phone: FieldRef<"accred_requests", 'String'>
    readonly organization: FieldRef<"accred_requests", 'String'>
    readonly function_id: FieldRef<"accred_requests", 'String'>
    readonly photo_url: FieldRef<"accred_requests", 'String'>
    readonly competition_id: FieldRef<"accred_requests", 'String'>
    readonly match_name: FieldRef<"accred_requests", 'String'>
    readonly status: FieldRef<"accred_requests", 'String'>
    readonly response_message: FieldRef<"accred_requests", 'String'>
    readonly zone_terrain: FieldRef<"accred_requests", 'Boolean'>
    readonly zone_tribune: FieldRef<"accred_requests", 'Boolean'>
    readonly zone_vestiaires: FieldRef<"accred_requests", 'Boolean'>
    readonly badge_pdf_url: FieldRef<"accred_requests", 'String'>
    readonly reviewed_by: FieldRef<"accred_requests", 'String'>
    readonly reviewed_at: FieldRef<"accred_requests", 'DateTime'>
    readonly created_at: FieldRef<"accred_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accred_requests findUnique
   */
  export type accred_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter, which accred_requests to fetch.
     */
    where: accred_requestsWhereUniqueInput
  }

  /**
   * accred_requests findUniqueOrThrow
   */
  export type accred_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter, which accred_requests to fetch.
     */
    where: accred_requestsWhereUniqueInput
  }

  /**
   * accred_requests findFirst
   */
  export type accred_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter, which accred_requests to fetch.
     */
    where?: accred_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_requests to fetch.
     */
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_requests.
     */
    cursor?: accred_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_requests.
     */
    distinct?: Accred_requestsScalarFieldEnum | Accred_requestsScalarFieldEnum[]
  }

  /**
   * accred_requests findFirstOrThrow
   */
  export type accred_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter, which accred_requests to fetch.
     */
    where?: accred_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_requests to fetch.
     */
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accred_requests.
     */
    cursor?: accred_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_requests.
     */
    distinct?: Accred_requestsScalarFieldEnum | Accred_requestsScalarFieldEnum[]
  }

  /**
   * accred_requests findMany
   */
  export type accred_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter, which accred_requests to fetch.
     */
    where?: accred_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accred_requests to fetch.
     */
    orderBy?: accred_requestsOrderByWithRelationInput | accred_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accred_requests.
     */
    cursor?: accred_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accred_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accred_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accred_requests.
     */
    distinct?: Accred_requestsScalarFieldEnum | Accred_requestsScalarFieldEnum[]
  }

  /**
   * accred_requests create
   */
  export type accred_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a accred_requests.
     */
    data: XOR<accred_requestsCreateInput, accred_requestsUncheckedCreateInput>
  }

  /**
   * accred_requests createMany
   */
  export type accred_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accred_requests.
     */
    data: accred_requestsCreateManyInput | accred_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accred_requests createManyAndReturn
   */
  export type accred_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many accred_requests.
     */
    data: accred_requestsCreateManyInput | accred_requestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * accred_requests update
   */
  export type accred_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a accred_requests.
     */
    data: XOR<accred_requestsUpdateInput, accred_requestsUncheckedUpdateInput>
    /**
     * Choose, which accred_requests to update.
     */
    where: accred_requestsWhereUniqueInput
  }

  /**
   * accred_requests updateMany
   */
  export type accred_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accred_requests.
     */
    data: XOR<accred_requestsUpdateManyMutationInput, accred_requestsUncheckedUpdateManyInput>
    /**
     * Filter which accred_requests to update
     */
    where?: accred_requestsWhereInput
    /**
     * Limit how many accred_requests to update.
     */
    limit?: number
  }

  /**
   * accred_requests updateManyAndReturn
   */
  export type accred_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * The data used to update accred_requests.
     */
    data: XOR<accred_requestsUpdateManyMutationInput, accred_requestsUncheckedUpdateManyInput>
    /**
     * Filter which accred_requests to update
     */
    where?: accred_requestsWhereInput
    /**
     * Limit how many accred_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * accred_requests upsert
   */
  export type accred_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the accred_requests to update in case it exists.
     */
    where: accred_requestsWhereUniqueInput
    /**
     * In case the accred_requests found by the `where` argument doesn't exist, create a new accred_requests with this data.
     */
    create: XOR<accred_requestsCreateInput, accred_requestsUncheckedCreateInput>
    /**
     * In case the accred_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accred_requestsUpdateInput, accred_requestsUncheckedUpdateInput>
  }

  /**
   * accred_requests delete
   */
  export type accred_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
    /**
     * Filter which accred_requests to delete.
     */
    where: accred_requestsWhereUniqueInput
  }

  /**
   * accred_requests deleteMany
   */
  export type accred_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accred_requests to delete
     */
    where?: accred_requestsWhereInput
    /**
     * Limit how many accred_requests to delete.
     */
    limit?: number
  }

  /**
   * accred_requests without action
   */
  export type accred_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accred_requests
     */
    select?: accred_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accred_requests
     */
    omit?: accred_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accred_requestsInclude<ExtArgs> | null
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


  export const Accred_competitionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    event_date: 'event_date',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Accred_competitionsScalarFieldEnum = (typeof Accred_competitionsScalarFieldEnum)[keyof typeof Accred_competitionsScalarFieldEnum]


  export const Accred_functionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Accred_functionsScalarFieldEnum = (typeof Accred_functionsScalarFieldEnum)[keyof typeof Accred_functionsScalarFieldEnum]


  export const Accred_adminsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    created_at: 'created_at'
  };

  export type Accred_adminsScalarFieldEnum = (typeof Accred_adminsScalarFieldEnum)[keyof typeof Accred_adminsScalarFieldEnum]


  export const Accred_requestsScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    organization: 'organization',
    function_id: 'function_id',
    photo_url: 'photo_url',
    competition_id: 'competition_id',
    match_name: 'match_name',
    status: 'status',
    response_message: 'response_message',
    zone_terrain: 'zone_terrain',
    zone_tribune: 'zone_tribune',
    zone_vestiaires: 'zone_vestiaires',
    badge_pdf_url: 'badge_pdf_url',
    reviewed_by: 'reviewed_by',
    reviewed_at: 'reviewed_at',
    created_at: 'created_at'
  };

  export type Accred_requestsScalarFieldEnum = (typeof Accred_requestsScalarFieldEnum)[keyof typeof Accred_requestsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type accred_competitionsWhereInput = {
    AND?: accred_competitionsWhereInput | accred_competitionsWhereInput[]
    OR?: accred_competitionsWhereInput[]
    NOT?: accred_competitionsWhereInput | accred_competitionsWhereInput[]
    id?: UuidFilter<"accred_competitions"> | string
    name?: StringFilter<"accred_competitions"> | string
    event_date?: DateTimeNullableFilter<"accred_competitions"> | Date | string | null
    is_active?: BoolNullableFilter<"accred_competitions"> | boolean | null
    created_at?: DateTimeNullableFilter<"accred_competitions"> | Date | string | null
    requests?: Accred_requestsListRelationFilter
  }

  export type accred_competitionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    event_date?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    requests?: accred_requestsOrderByRelationAggregateInput
  }

  export type accred_competitionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accred_competitionsWhereInput | accred_competitionsWhereInput[]
    OR?: accred_competitionsWhereInput[]
    NOT?: accred_competitionsWhereInput | accred_competitionsWhereInput[]
    name?: StringFilter<"accred_competitions"> | string
    event_date?: DateTimeNullableFilter<"accred_competitions"> | Date | string | null
    is_active?: BoolNullableFilter<"accred_competitions"> | boolean | null
    created_at?: DateTimeNullableFilter<"accred_competitions"> | Date | string | null
    requests?: Accred_requestsListRelationFilter
  }, "id">

  export type accred_competitionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    event_date?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: accred_competitionsCountOrderByAggregateInput
    _max?: accred_competitionsMaxOrderByAggregateInput
    _min?: accred_competitionsMinOrderByAggregateInput
  }

  export type accred_competitionsScalarWhereWithAggregatesInput = {
    AND?: accred_competitionsScalarWhereWithAggregatesInput | accred_competitionsScalarWhereWithAggregatesInput[]
    OR?: accred_competitionsScalarWhereWithAggregatesInput[]
    NOT?: accred_competitionsScalarWhereWithAggregatesInput | accred_competitionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"accred_competitions"> | string
    name?: StringWithAggregatesFilter<"accred_competitions"> | string
    event_date?: DateTimeNullableWithAggregatesFilter<"accred_competitions"> | Date | string | null
    is_active?: BoolNullableWithAggregatesFilter<"accred_competitions"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"accred_competitions"> | Date | string | null
  }

  export type accred_functionsWhereInput = {
    AND?: accred_functionsWhereInput | accred_functionsWhereInput[]
    OR?: accred_functionsWhereInput[]
    NOT?: accred_functionsWhereInput | accred_functionsWhereInput[]
    id?: UuidFilter<"accred_functions"> | string
    name?: StringFilter<"accred_functions"> | string
    is_active?: BoolNullableFilter<"accred_functions"> | boolean | null
    created_at?: DateTimeNullableFilter<"accred_functions"> | Date | string | null
    requests?: Accred_requestsListRelationFilter
  }

  export type accred_functionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    requests?: accred_requestsOrderByRelationAggregateInput
  }

  export type accred_functionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: accred_functionsWhereInput | accred_functionsWhereInput[]
    OR?: accred_functionsWhereInput[]
    NOT?: accred_functionsWhereInput | accred_functionsWhereInput[]
    is_active?: BoolNullableFilter<"accred_functions"> | boolean | null
    created_at?: DateTimeNullableFilter<"accred_functions"> | Date | string | null
    requests?: Accred_requestsListRelationFilter
  }, "id" | "name">

  export type accred_functionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: accred_functionsCountOrderByAggregateInput
    _max?: accred_functionsMaxOrderByAggregateInput
    _min?: accred_functionsMinOrderByAggregateInput
  }

  export type accred_functionsScalarWhereWithAggregatesInput = {
    AND?: accred_functionsScalarWhereWithAggregatesInput | accred_functionsScalarWhereWithAggregatesInput[]
    OR?: accred_functionsScalarWhereWithAggregatesInput[]
    NOT?: accred_functionsScalarWhereWithAggregatesInput | accred_functionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"accred_functions"> | string
    name?: StringWithAggregatesFilter<"accred_functions"> | string
    is_active?: BoolNullableWithAggregatesFilter<"accred_functions"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"accred_functions"> | Date | string | null
  }

  export type accred_adminsWhereInput = {
    AND?: accred_adminsWhereInput | accred_adminsWhereInput[]
    OR?: accred_adminsWhereInput[]
    NOT?: accred_adminsWhereInput | accred_adminsWhereInput[]
    id?: UuidFilter<"accred_admins"> | string
    email?: StringFilter<"accred_admins"> | string
    role?: StringFilter<"accred_admins"> | string
    created_at?: DateTimeNullableFilter<"accred_admins"> | Date | string | null
  }

  export type accred_adminsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type accred_adminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: accred_adminsWhereInput | accred_adminsWhereInput[]
    OR?: accred_adminsWhereInput[]
    NOT?: accred_adminsWhereInput | accred_adminsWhereInput[]
    role?: StringFilter<"accred_admins"> | string
    created_at?: DateTimeNullableFilter<"accred_admins"> | Date | string | null
  }, "id" | "email">

  export type accred_adminsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: accred_adminsCountOrderByAggregateInput
    _max?: accred_adminsMaxOrderByAggregateInput
    _min?: accred_adminsMinOrderByAggregateInput
  }

  export type accred_adminsScalarWhereWithAggregatesInput = {
    AND?: accred_adminsScalarWhereWithAggregatesInput | accred_adminsScalarWhereWithAggregatesInput[]
    OR?: accred_adminsScalarWhereWithAggregatesInput[]
    NOT?: accred_adminsScalarWhereWithAggregatesInput | accred_adminsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"accred_admins"> | string
    email?: StringWithAggregatesFilter<"accred_admins"> | string
    role?: StringWithAggregatesFilter<"accred_admins"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"accred_admins"> | Date | string | null
  }

  export type accred_requestsWhereInput = {
    AND?: accred_requestsWhereInput | accred_requestsWhereInput[]
    OR?: accred_requestsWhereInput[]
    NOT?: accred_requestsWhereInput | accred_requestsWhereInput[]
    id?: UuidFilter<"accred_requests"> | string
    first_name?: StringFilter<"accred_requests"> | string
    last_name?: StringFilter<"accred_requests"> | string
    email?: StringFilter<"accred_requests"> | string
    phone?: StringNullableFilter<"accred_requests"> | string | null
    organization?: StringFilter<"accred_requests"> | string
    function_id?: UuidFilter<"accred_requests"> | string
    photo_url?: StringFilter<"accred_requests"> | string
    competition_id?: UuidFilter<"accred_requests"> | string
    match_name?: StringFilter<"accred_requests"> | string
    status?: StringFilter<"accred_requests"> | string
    response_message?: StringNullableFilter<"accred_requests"> | string | null
    zone_terrain?: BoolFilter<"accred_requests"> | boolean
    zone_tribune?: BoolFilter<"accred_requests"> | boolean
    zone_vestiaires?: BoolFilter<"accred_requests"> | boolean
    badge_pdf_url?: StringNullableFilter<"accred_requests"> | string | null
    reviewed_by?: UuidNullableFilter<"accred_requests"> | string | null
    reviewed_at?: DateTimeNullableFilter<"accred_requests"> | Date | string | null
    created_at?: DateTimeFilter<"accred_requests"> | Date | string
    competition?: XOR<Accred_competitionsScalarRelationFilter, accred_competitionsWhereInput>
    function?: XOR<Accred_functionsScalarRelationFilter, accred_functionsWhereInput>
  }

  export type accred_requestsOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrder
    function_id?: SortOrder
    photo_url?: SortOrder
    competition_id?: SortOrder
    match_name?: SortOrder
    status?: SortOrder
    response_message?: SortOrderInput | SortOrder
    zone_terrain?: SortOrder
    zone_tribune?: SortOrder
    zone_vestiaires?: SortOrder
    badge_pdf_url?: SortOrderInput | SortOrder
    reviewed_by?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    competition?: accred_competitionsOrderByWithRelationInput
    function?: accred_functionsOrderByWithRelationInput
  }

  export type accred_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accred_requestsWhereInput | accred_requestsWhereInput[]
    OR?: accred_requestsWhereInput[]
    NOT?: accred_requestsWhereInput | accred_requestsWhereInput[]
    first_name?: StringFilter<"accred_requests"> | string
    last_name?: StringFilter<"accred_requests"> | string
    email?: StringFilter<"accred_requests"> | string
    phone?: StringNullableFilter<"accred_requests"> | string | null
    organization?: StringFilter<"accred_requests"> | string
    function_id?: UuidFilter<"accred_requests"> | string
    photo_url?: StringFilter<"accred_requests"> | string
    competition_id?: UuidFilter<"accred_requests"> | string
    match_name?: StringFilter<"accred_requests"> | string
    status?: StringFilter<"accred_requests"> | string
    response_message?: StringNullableFilter<"accred_requests"> | string | null
    zone_terrain?: BoolFilter<"accred_requests"> | boolean
    zone_tribune?: BoolFilter<"accred_requests"> | boolean
    zone_vestiaires?: BoolFilter<"accred_requests"> | boolean
    badge_pdf_url?: StringNullableFilter<"accred_requests"> | string | null
    reviewed_by?: UuidNullableFilter<"accred_requests"> | string | null
    reviewed_at?: DateTimeNullableFilter<"accred_requests"> | Date | string | null
    created_at?: DateTimeFilter<"accred_requests"> | Date | string
    competition?: XOR<Accred_competitionsScalarRelationFilter, accred_competitionsWhereInput>
    function?: XOR<Accred_functionsScalarRelationFilter, accred_functionsWhereInput>
  }, "id">

  export type accred_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrder
    function_id?: SortOrder
    photo_url?: SortOrder
    competition_id?: SortOrder
    match_name?: SortOrder
    status?: SortOrder
    response_message?: SortOrderInput | SortOrder
    zone_terrain?: SortOrder
    zone_tribune?: SortOrder
    zone_vestiaires?: SortOrder
    badge_pdf_url?: SortOrderInput | SortOrder
    reviewed_by?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: accred_requestsCountOrderByAggregateInput
    _max?: accred_requestsMaxOrderByAggregateInput
    _min?: accred_requestsMinOrderByAggregateInput
  }

  export type accred_requestsScalarWhereWithAggregatesInput = {
    AND?: accred_requestsScalarWhereWithAggregatesInput | accred_requestsScalarWhereWithAggregatesInput[]
    OR?: accred_requestsScalarWhereWithAggregatesInput[]
    NOT?: accred_requestsScalarWhereWithAggregatesInput | accred_requestsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"accred_requests"> | string
    first_name?: StringWithAggregatesFilter<"accred_requests"> | string
    last_name?: StringWithAggregatesFilter<"accred_requests"> | string
    email?: StringWithAggregatesFilter<"accred_requests"> | string
    phone?: StringNullableWithAggregatesFilter<"accred_requests"> | string | null
    organization?: StringWithAggregatesFilter<"accred_requests"> | string
    function_id?: UuidWithAggregatesFilter<"accred_requests"> | string
    photo_url?: StringWithAggregatesFilter<"accred_requests"> | string
    competition_id?: UuidWithAggregatesFilter<"accred_requests"> | string
    match_name?: StringWithAggregatesFilter<"accred_requests"> | string
    status?: StringWithAggregatesFilter<"accred_requests"> | string
    response_message?: StringNullableWithAggregatesFilter<"accred_requests"> | string | null
    zone_terrain?: BoolWithAggregatesFilter<"accred_requests"> | boolean
    zone_tribune?: BoolWithAggregatesFilter<"accred_requests"> | boolean
    zone_vestiaires?: BoolWithAggregatesFilter<"accred_requests"> | boolean
    badge_pdf_url?: StringNullableWithAggregatesFilter<"accred_requests"> | string | null
    reviewed_by?: UuidNullableWithAggregatesFilter<"accred_requests"> | string | null
    reviewed_at?: DateTimeNullableWithAggregatesFilter<"accred_requests"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"accred_requests"> | Date | string
  }

  export type accred_competitionsCreateInput = {
    id?: string
    name: string
    event_date?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    requests?: accred_requestsCreateNestedManyWithoutCompetitionInput
  }

  export type accred_competitionsUncheckedCreateInput = {
    id?: string
    name: string
    event_date?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    requests?: accred_requestsUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type accred_competitionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: accred_requestsUpdateManyWithoutCompetitionNestedInput
  }

  export type accred_competitionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: accred_requestsUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type accred_competitionsCreateManyInput = {
    id?: string
    name: string
    event_date?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_competitionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_competitionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_functionsCreateInput = {
    id?: string
    name: string
    is_active?: boolean | null
    created_at?: Date | string | null
    requests?: accred_requestsCreateNestedManyWithoutFunctionInput
  }

  export type accred_functionsUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean | null
    created_at?: Date | string | null
    requests?: accred_requestsUncheckedCreateNestedManyWithoutFunctionInput
  }

  export type accred_functionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: accred_requestsUpdateManyWithoutFunctionNestedInput
  }

  export type accred_functionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: accred_requestsUncheckedUpdateManyWithoutFunctionNestedInput
  }

  export type accred_functionsCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_functionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_functionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_adminsCreateInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type accred_adminsUncheckedCreateInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type accred_adminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_adminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_adminsCreateManyInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type accred_adminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_adminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_requestsCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    photo_url: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
    competition: accred_competitionsCreateNestedOneWithoutRequestsInput
    function: accred_functionsCreateNestedOneWithoutRequestsInput
  }

  export type accred_requestsUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    function_id: string
    photo_url: string
    competition_id: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: accred_competitionsUpdateOneRequiredWithoutRequestsNestedInput
    function?: accred_functionsUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type accred_requestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    function_id?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accred_requestsCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    function_id: string
    photo_url: string
    competition_id: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accred_requestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    function_id?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Accred_requestsListRelationFilter = {
    every?: accred_requestsWhereInput
    some?: accred_requestsWhereInput
    none?: accred_requestsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accred_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accred_competitionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accred_competitionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accred_competitionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type accred_functionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accred_functionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accred_functionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accred_adminsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type accred_adminsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type accred_adminsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Accred_competitionsScalarRelationFilter = {
    is?: accred_competitionsWhereInput
    isNot?: accred_competitionsWhereInput
  }

  export type Accred_functionsScalarRelationFilter = {
    is?: accred_functionsWhereInput
    isNot?: accred_functionsWhereInput
  }

  export type accred_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    function_id?: SortOrder
    photo_url?: SortOrder
    competition_id?: SortOrder
    match_name?: SortOrder
    status?: SortOrder
    response_message?: SortOrder
    zone_terrain?: SortOrder
    zone_tribune?: SortOrder
    zone_vestiaires?: SortOrder
    badge_pdf_url?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type accred_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    function_id?: SortOrder
    photo_url?: SortOrder
    competition_id?: SortOrder
    match_name?: SortOrder
    status?: SortOrder
    response_message?: SortOrder
    zone_terrain?: SortOrder
    zone_tribune?: SortOrder
    zone_vestiaires?: SortOrder
    badge_pdf_url?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type accred_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    function_id?: SortOrder
    photo_url?: SortOrder
    competition_id?: SortOrder
    match_name?: SortOrder
    status?: SortOrder
    response_message?: SortOrder
    zone_terrain?: SortOrder
    zone_tribune?: SortOrder
    zone_vestiaires?: SortOrder
    badge_pdf_url?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type accred_requestsCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput> | accred_requestsCreateWithoutCompetitionInput[] | accred_requestsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutCompetitionInput | accred_requestsCreateOrConnectWithoutCompetitionInput[]
    createMany?: accred_requestsCreateManyCompetitionInputEnvelope
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
  }

  export type accred_requestsUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput> | accred_requestsCreateWithoutCompetitionInput[] | accred_requestsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutCompetitionInput | accred_requestsCreateOrConnectWithoutCompetitionInput[]
    createMany?: accred_requestsCreateManyCompetitionInputEnvelope
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type accred_requestsUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput> | accred_requestsCreateWithoutCompetitionInput[] | accred_requestsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutCompetitionInput | accred_requestsCreateOrConnectWithoutCompetitionInput[]
    upsert?: accred_requestsUpsertWithWhereUniqueWithoutCompetitionInput | accred_requestsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: accred_requestsCreateManyCompetitionInputEnvelope
    set?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    disconnect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    delete?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    update?: accred_requestsUpdateWithWhereUniqueWithoutCompetitionInput | accred_requestsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: accred_requestsUpdateManyWithWhereWithoutCompetitionInput | accred_requestsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
  }

  export type accred_requestsUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput> | accred_requestsCreateWithoutCompetitionInput[] | accred_requestsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutCompetitionInput | accred_requestsCreateOrConnectWithoutCompetitionInput[]
    upsert?: accred_requestsUpsertWithWhereUniqueWithoutCompetitionInput | accred_requestsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: accred_requestsCreateManyCompetitionInputEnvelope
    set?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    disconnect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    delete?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    update?: accred_requestsUpdateWithWhereUniqueWithoutCompetitionInput | accred_requestsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: accred_requestsUpdateManyWithWhereWithoutCompetitionInput | accred_requestsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
  }

  export type accred_requestsCreateNestedManyWithoutFunctionInput = {
    create?: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput> | accred_requestsCreateWithoutFunctionInput[] | accred_requestsUncheckedCreateWithoutFunctionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutFunctionInput | accred_requestsCreateOrConnectWithoutFunctionInput[]
    createMany?: accred_requestsCreateManyFunctionInputEnvelope
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
  }

  export type accred_requestsUncheckedCreateNestedManyWithoutFunctionInput = {
    create?: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput> | accred_requestsCreateWithoutFunctionInput[] | accred_requestsUncheckedCreateWithoutFunctionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutFunctionInput | accred_requestsCreateOrConnectWithoutFunctionInput[]
    createMany?: accred_requestsCreateManyFunctionInputEnvelope
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
  }

  export type accred_requestsUpdateManyWithoutFunctionNestedInput = {
    create?: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput> | accred_requestsCreateWithoutFunctionInput[] | accred_requestsUncheckedCreateWithoutFunctionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutFunctionInput | accred_requestsCreateOrConnectWithoutFunctionInput[]
    upsert?: accred_requestsUpsertWithWhereUniqueWithoutFunctionInput | accred_requestsUpsertWithWhereUniqueWithoutFunctionInput[]
    createMany?: accred_requestsCreateManyFunctionInputEnvelope
    set?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    disconnect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    delete?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    update?: accred_requestsUpdateWithWhereUniqueWithoutFunctionInput | accred_requestsUpdateWithWhereUniqueWithoutFunctionInput[]
    updateMany?: accred_requestsUpdateManyWithWhereWithoutFunctionInput | accred_requestsUpdateManyWithWhereWithoutFunctionInput[]
    deleteMany?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
  }

  export type accred_requestsUncheckedUpdateManyWithoutFunctionNestedInput = {
    create?: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput> | accred_requestsCreateWithoutFunctionInput[] | accred_requestsUncheckedCreateWithoutFunctionInput[]
    connectOrCreate?: accred_requestsCreateOrConnectWithoutFunctionInput | accred_requestsCreateOrConnectWithoutFunctionInput[]
    upsert?: accred_requestsUpsertWithWhereUniqueWithoutFunctionInput | accred_requestsUpsertWithWhereUniqueWithoutFunctionInput[]
    createMany?: accred_requestsCreateManyFunctionInputEnvelope
    set?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    disconnect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    delete?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    connect?: accred_requestsWhereUniqueInput | accred_requestsWhereUniqueInput[]
    update?: accred_requestsUpdateWithWhereUniqueWithoutFunctionInput | accred_requestsUpdateWithWhereUniqueWithoutFunctionInput[]
    updateMany?: accred_requestsUpdateManyWithWhereWithoutFunctionInput | accred_requestsUpdateManyWithWhereWithoutFunctionInput[]
    deleteMany?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
  }

  export type accred_competitionsCreateNestedOneWithoutRequestsInput = {
    create?: XOR<accred_competitionsCreateWithoutRequestsInput, accred_competitionsUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: accred_competitionsCreateOrConnectWithoutRequestsInput
    connect?: accred_competitionsWhereUniqueInput
  }

  export type accred_functionsCreateNestedOneWithoutRequestsInput = {
    create?: XOR<accred_functionsCreateWithoutRequestsInput, accred_functionsUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: accred_functionsCreateOrConnectWithoutRequestsInput
    connect?: accred_functionsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type accred_competitionsUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<accred_competitionsCreateWithoutRequestsInput, accred_competitionsUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: accred_competitionsCreateOrConnectWithoutRequestsInput
    upsert?: accred_competitionsUpsertWithoutRequestsInput
    connect?: accred_competitionsWhereUniqueInput
    update?: XOR<XOR<accred_competitionsUpdateToOneWithWhereWithoutRequestsInput, accred_competitionsUpdateWithoutRequestsInput>, accred_competitionsUncheckedUpdateWithoutRequestsInput>
  }

  export type accred_functionsUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<accred_functionsCreateWithoutRequestsInput, accred_functionsUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: accred_functionsCreateOrConnectWithoutRequestsInput
    upsert?: accred_functionsUpsertWithoutRequestsInput
    connect?: accred_functionsWhereUniqueInput
    update?: XOR<XOR<accred_functionsUpdateToOneWithWhereWithoutRequestsInput, accred_functionsUpdateWithoutRequestsInput>, accred_functionsUncheckedUpdateWithoutRequestsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type accred_requestsCreateWithoutCompetitionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    photo_url: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
    function: accred_functionsCreateNestedOneWithoutRequestsInput
  }

  export type accred_requestsUncheckedCreateWithoutCompetitionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    function_id: string
    photo_url: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsCreateOrConnectWithoutCompetitionInput = {
    where: accred_requestsWhereUniqueInput
    create: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput>
  }

  export type accred_requestsCreateManyCompetitionInputEnvelope = {
    data: accred_requestsCreateManyCompetitionInput | accred_requestsCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type accred_requestsUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: accred_requestsWhereUniqueInput
    update: XOR<accred_requestsUpdateWithoutCompetitionInput, accred_requestsUncheckedUpdateWithoutCompetitionInput>
    create: XOR<accred_requestsCreateWithoutCompetitionInput, accred_requestsUncheckedCreateWithoutCompetitionInput>
  }

  export type accred_requestsUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: accred_requestsWhereUniqueInput
    data: XOR<accred_requestsUpdateWithoutCompetitionInput, accred_requestsUncheckedUpdateWithoutCompetitionInput>
  }

  export type accred_requestsUpdateManyWithWhereWithoutCompetitionInput = {
    where: accred_requestsScalarWhereInput
    data: XOR<accred_requestsUpdateManyMutationInput, accred_requestsUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type accred_requestsScalarWhereInput = {
    AND?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
    OR?: accred_requestsScalarWhereInput[]
    NOT?: accred_requestsScalarWhereInput | accred_requestsScalarWhereInput[]
    id?: UuidFilter<"accred_requests"> | string
    first_name?: StringFilter<"accred_requests"> | string
    last_name?: StringFilter<"accred_requests"> | string
    email?: StringFilter<"accred_requests"> | string
    phone?: StringNullableFilter<"accred_requests"> | string | null
    organization?: StringFilter<"accred_requests"> | string
    function_id?: UuidFilter<"accred_requests"> | string
    photo_url?: StringFilter<"accred_requests"> | string
    competition_id?: UuidFilter<"accred_requests"> | string
    match_name?: StringFilter<"accred_requests"> | string
    status?: StringFilter<"accred_requests"> | string
    response_message?: StringNullableFilter<"accred_requests"> | string | null
    zone_terrain?: BoolFilter<"accred_requests"> | boolean
    zone_tribune?: BoolFilter<"accred_requests"> | boolean
    zone_vestiaires?: BoolFilter<"accred_requests"> | boolean
    badge_pdf_url?: StringNullableFilter<"accred_requests"> | string | null
    reviewed_by?: UuidNullableFilter<"accred_requests"> | string | null
    reviewed_at?: DateTimeNullableFilter<"accred_requests"> | Date | string | null
    created_at?: DateTimeFilter<"accred_requests"> | Date | string
  }

  export type accred_requestsCreateWithoutFunctionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    photo_url: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
    competition: accred_competitionsCreateNestedOneWithoutRequestsInput
  }

  export type accred_requestsUncheckedCreateWithoutFunctionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    photo_url: string
    competition_id: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsCreateOrConnectWithoutFunctionInput = {
    where: accred_requestsWhereUniqueInput
    create: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput>
  }

  export type accred_requestsCreateManyFunctionInputEnvelope = {
    data: accred_requestsCreateManyFunctionInput | accred_requestsCreateManyFunctionInput[]
    skipDuplicates?: boolean
  }

  export type accred_requestsUpsertWithWhereUniqueWithoutFunctionInput = {
    where: accred_requestsWhereUniqueInput
    update: XOR<accred_requestsUpdateWithoutFunctionInput, accred_requestsUncheckedUpdateWithoutFunctionInput>
    create: XOR<accred_requestsCreateWithoutFunctionInput, accred_requestsUncheckedCreateWithoutFunctionInput>
  }

  export type accred_requestsUpdateWithWhereUniqueWithoutFunctionInput = {
    where: accred_requestsWhereUniqueInput
    data: XOR<accred_requestsUpdateWithoutFunctionInput, accred_requestsUncheckedUpdateWithoutFunctionInput>
  }

  export type accred_requestsUpdateManyWithWhereWithoutFunctionInput = {
    where: accred_requestsScalarWhereInput
    data: XOR<accred_requestsUpdateManyMutationInput, accred_requestsUncheckedUpdateManyWithoutFunctionInput>
  }

  export type accred_competitionsCreateWithoutRequestsInput = {
    id?: string
    name: string
    event_date?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_competitionsUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    event_date?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_competitionsCreateOrConnectWithoutRequestsInput = {
    where: accred_competitionsWhereUniqueInput
    create: XOR<accred_competitionsCreateWithoutRequestsInput, accred_competitionsUncheckedCreateWithoutRequestsInput>
  }

  export type accred_functionsCreateWithoutRequestsInput = {
    id?: string
    name: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_functionsUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accred_functionsCreateOrConnectWithoutRequestsInput = {
    where: accred_functionsWhereUniqueInput
    create: XOR<accred_functionsCreateWithoutRequestsInput, accred_functionsUncheckedCreateWithoutRequestsInput>
  }

  export type accred_competitionsUpsertWithoutRequestsInput = {
    update: XOR<accred_competitionsUpdateWithoutRequestsInput, accred_competitionsUncheckedUpdateWithoutRequestsInput>
    create: XOR<accred_competitionsCreateWithoutRequestsInput, accred_competitionsUncheckedCreateWithoutRequestsInput>
    where?: accred_competitionsWhereInput
  }

  export type accred_competitionsUpdateToOneWithWhereWithoutRequestsInput = {
    where?: accred_competitionsWhereInput
    data: XOR<accred_competitionsUpdateWithoutRequestsInput, accred_competitionsUncheckedUpdateWithoutRequestsInput>
  }

  export type accred_competitionsUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_competitionsUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_functionsUpsertWithoutRequestsInput = {
    update: XOR<accred_functionsUpdateWithoutRequestsInput, accred_functionsUncheckedUpdateWithoutRequestsInput>
    create: XOR<accred_functionsCreateWithoutRequestsInput, accred_functionsUncheckedCreateWithoutRequestsInput>
    where?: accred_functionsWhereInput
  }

  export type accred_functionsUpdateToOneWithWhereWithoutRequestsInput = {
    where?: accred_functionsWhereInput
    data: XOR<accred_functionsUpdateWithoutRequestsInput, accred_functionsUncheckedUpdateWithoutRequestsInput>
  }

  export type accred_functionsUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_functionsUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accred_requestsCreateManyCompetitionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    function_id: string
    photo_url: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    function?: accred_functionsUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type accred_requestsUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    function_id?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accred_requestsUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    function_id?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accred_requestsCreateManyFunctionInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    organization: string
    photo_url: string
    competition_id: string
    match_name: string
    status?: string
    response_message?: string | null
    zone_terrain?: boolean
    zone_tribune?: boolean
    zone_vestiaires?: boolean
    badge_pdf_url?: string | null
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type accred_requestsUpdateWithoutFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: accred_competitionsUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type accred_requestsUncheckedUpdateWithoutFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accred_requestsUncheckedUpdateManyWithoutFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    match_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
    zone_terrain?: BoolFieldUpdateOperationsInput | boolean
    zone_tribune?: BoolFieldUpdateOperationsInput | boolean
    zone_vestiaires?: BoolFieldUpdateOperationsInput | boolean
    badge_pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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