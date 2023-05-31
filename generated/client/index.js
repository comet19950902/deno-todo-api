
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated\\client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TodoScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  content: 'content',
  category: 'category',
  published: 'published',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  Todo: 'Todo'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\DELL\\Desktop\\learn\\blog\\Deno\\deno-prisma-todo\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVG9kbyB7CiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIC8vIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRpdGxlICAgICBTdHJpbmcgICBAdW5pcXVlCiAgY29udGVudCAgIFN0cmluZwogIGNhdGVnb3J5ICBTdHJpbmcKICBwdWJsaXNoZWQgQm9vbGVhbj8gQGRlZmF1bHQoZmFsc2UpCgogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAoKICBAQG1hcChuYW1lOiAidG9kb3MiKQp9Cg=='
config.inlineSchemaHash = 'b83ebc0751122f36b107dbdb5500701564688e456acf4c648fe0661ed46c5202'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

