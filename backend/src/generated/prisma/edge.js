
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DiscountedScalarFieldEnum = {
  id: 'id',
  Order_item_id: 'Order_item_id',
  Promo_Id: 'Promo_Id',
  Amount: 'Amount'
};

exports.Prisma.Employee_sScalarFieldEnum = {
  Employee_Id: 'Employee_Id',
  role: 'role',
  User_Id: 'User_Id'
};

exports.Prisma.OrderItemsScalarFieldEnum = {
  Order_Items_Id: 'Order_Items_Id',
  Order_Id: 'Order_Id',
  Product_Id: 'Product_Id'
};

exports.Prisma.OrdersScalarFieldEnum = {
  Order_Id: 'Order_Id',
  Order_Date: 'Order_Date',
  Order_Time: 'Order_Time',
  User_ID: 'User_ID',
  Total: 'Total'
};

exports.Prisma.ProductScalarFieldEnum = {
  Product_Id: 'Product_Id',
  Product_Name: 'Product_Name',
  Product_Description: 'Product_Description',
  Product_Price: 'Product_Price',
  Product_Quatity: 'Product_Quatity',
  Product_img_uri: 'Product_img_uri'
};

exports.Prisma.PromoScalarFieldEnum = {
  Id: 'Id',
  promo_name: 'promo_name',
  Discount_Percent: 'Discount_Percent',
  Start_Date: 'Start_Date',
  End_Date: 'End_Date'
};

exports.Prisma.Promo_itemsScalarFieldEnum = {
  Promo_id: 'Promo_id',
  Product_id: 'Product_id'
};

exports.Prisma.Shipping_TableScalarFieldEnum = {
  Shipping_ID: 'Shipping_ID',
  Order_id: 'Order_id',
  Tracking_no: 'Tracking_no'
};

exports.Prisma.User_NotificationsScalarFieldEnum = {
  Notif_id: 'Notif_id',
  User_ID: 'User_ID',
  Message: 'Message'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.Employee_sOrderByRelevanceFieldEnum = {
  role: 'role'
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
  Product_Name: 'Product_Name',
  Product_Description: 'Product_Description',
  Product_img_uri: 'Product_img_uri'
};

exports.Prisma.PromoOrderByRelevanceFieldEnum = {
  promo_name: 'promo_name'
};

exports.Prisma.Shipping_TableOrderByRelevanceFieldEnum = {
  Tracking_no: 'Tracking_no'
};

exports.Prisma.User_NotificationsOrderByRelevanceFieldEnum = {
  Message: 'Message'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  User_img_uri: 'User_img_uri',
  Username: 'Username',
  FirstName: 'FirstName',
  LastName: 'LastName',
  Address: 'Address',
  City: 'City',
  State: 'State',
  Password: 'Password'
};


exports.Prisma.ModelName = {
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
      "value": "/home/munachim/Dani_Food_Proj/Dani_Foods_Proj/backend/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/munachim/Dani_Food_Proj/Dani_Foods_Proj/backend/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.7.0",
  "engineVersion": "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Discounted {\n  id            Int          @id @default(autoincrement()) @db.UnsignedInt\n  Order_item_id Int?         @db.UnsignedInt\n  Promo_Id      Int?         @db.UnsignedInt\n  Amount        Int\n  OrderItems    OrderItems?  @relation(fields: [Order_item_id], references: [Order_Items_Id], onDelete: NoAction, onUpdate: NoAction, map: \"discounted_Order_Item_id_foreign\")\n  Promo_items   Promo_items? @relation(fields: [Promo_Id], references: [Promo_id], onDelete: NoAction, onUpdate: NoAction, map: \"discounted_promo_id_foreign\")\n\n  @@index([Order_item_id], map: \"discounted_Order_Item_id_foreign\")\n  @@index([Promo_Id], map: \"discounted_promo_id_foreign\")\n}\n\nmodel Employee_s {\n  Employee_Id Int    @id @default(autoincrement()) @db.UnsignedInt\n  role        String @db.VarChar(255)\n  User_Id     Int?   @db.UnsignedInt\n  Users       Users? @relation(fields: [User_Id], references: [User_ID], onDelete: NoAction, onUpdate: NoAction, map: \"employee's_user_id_foreign\")\n\n  @@index([User_Id], map: \"employee's_user_id_foreign\")\n  @@map(\"Employee's\")\n}\n\nmodel OrderItems {\n  Order_Items_Id Int          @id @default(autoincrement()) @db.UnsignedInt\n  Order_Id       Int\n  Product_Id     Int?         @db.UnsignedInt\n  Discounted     Discounted[]\n  Orders         Orders       @relation(fields: [Order_Items_Id], references: [Order_Id], onDelete: NoAction, onUpdate: NoAction, map: \"orderitems_order_items_id_foreign\")\n  Product        Product?     @relation(fields: [Product_Id], references: [Product_Id], onDelete: NoAction, onUpdate: NoAction, map: \"orderitems_product_id_foreign\")\n\n  @@index([Product_Id], map: \"orderitems_product_id_foreign\")\n}\n\nmodel Orders {\n  Order_Id       Int              @id @default(autoincrement()) @db.UnsignedInt\n  Order_Date     DateTime         @db.DateTime(0)\n  Order_Time     DateTime         @db.Timestamp(0)\n  User_ID        Int?             @db.UnsignedInt\n  Total          Decimal          @db.Decimal(8, 2)\n  OrderItems     OrderItems?\n  Users          Users?           @relation(fields: [User_ID], references: [User_ID], onDelete: NoAction, onUpdate: NoAction, map: \"orders_user_id_foreign\")\n  Shipping_Table Shipping_Table[]\n\n  @@index([User_ID], map: \"orders_user_id_foreign\")\n}\n\nmodel Product {\n  Product_Id          Int           @id @db.UnsignedInt\n  Product_Name        String        @db.VarChar(255)\n  Product_Description String        @db.Text\n  Product_Price       Decimal       @db.Decimal(8, 2)\n  Product_Quatity     Int\n  Product_img_uri     String?       @db.VarChar(255)\n  OrderItems          OrderItems[]\n  Promo_items         Promo_items[]\n}\n\nmodel Promo {\n  Id               Int          @id @default(autoincrement()) @db.UnsignedInt\n  promo_name       String       @db.Text\n  Discount_Percent Decimal      @db.Decimal(8, 2)\n  Start_Date       DateTime     @db.Date\n  End_Date         DateTime     @db.Date\n  Promo_items      Promo_items?\n}\n\nmodel Promo_items {\n  Promo_id   Int          @id @db.UnsignedInt\n  Product_id Int?         @db.UnsignedInt\n  Discounted Discounted[]\n  Product    Product?     @relation(fields: [Product_id], references: [Product_Id], onDelete: NoAction, onUpdate: NoAction, map: \"promo_items_product_id_foreign\")\n  Promo      Promo        @relation(fields: [Promo_id], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: \"promo_items_promo_id_foreign\")\n\n  @@index([Product_id], map: \"promo_items_product_id_foreign\")\n}\n\nmodel Shipping_Table {\n  Shipping_ID Int     @id @default(autoincrement()) @db.UnsignedInt\n  Order_id    Int?    @db.UnsignedInt\n  Tracking_no String  @db.Text\n  Orders      Orders? @relation(fields: [Order_id], references: [Order_Id], onDelete: NoAction, onUpdate: NoAction, map: \"shipping_table_order_id_foreign\")\n\n  @@index([Order_id], map: \"shipping_table_order_id_foreign\")\n}\n\nmodel User_Notifications {\n  Notif_id Int    @id @default(autoincrement()) @db.UnsignedInt\n  User_ID  Int?   @db.UnsignedInt\n  Message  String @db.Text\n  Users    Users? @relation(fields: [User_ID], references: [User_ID], onDelete: NoAction, onUpdate: NoAction, map: \"user_notifications_user_id_foreign\")\n\n  @@index([User_ID], map: \"user_notifications_user_id_foreign\")\n}\n\nmodel Users {\n  User_ID            Int                  @id @default(autoincrement()) @db.UnsignedInt\n  User_img_uri       String?              @db.VarChar(255)\n  Username           String               @db.VarChar(255)\n  FirstName          String               @db.VarChar(255)\n  LastName           String               @db.VarChar(255)\n  Address            String?              @db.Text\n  City               String?              @db.VarChar(255)\n  State              String?              @db.VarChar(255)\n  ZipCode            Int?\n  Password           String               @db.VarChar(255)\n  Employee_s         Employee_s[]\n  Orders             Orders[]\n  User_Notifications User_Notifications[]\n}\n",
  "inlineSchemaHash": "145a254353c2706c7249851dcacb5cbd5c820699b237965e3c69319b67da3f7b",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Discounted\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Promo_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderItems\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"nativeType\":null,\"relationName\":\"DiscountedToOrderItems\",\"relationFromFields\":[\"Order_item_id\"],\"relationToFields\":[\"Order_Items_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Promo_items\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promo_items\",\"nativeType\":null,\"relationName\":\"DiscountedToPromo_items\",\"relationFromFields\":[\"Promo_Id\"],\"relationToFields\":[\"Promo_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Employee_s\":{\"dbName\":\"Employee's\",\"schema\":null,\"fields\":[{\"name\":\"Employee_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"Employee_sToUsers\",\"relationFromFields\":[\"User_Id\"],\"relationToFields\":[\"User_ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItems\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Order_Items_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discounted\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Discounted\",\"nativeType\":null,\"relationName\":\"DiscountedToOrderItems\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"nativeType\":null,\"relationName\":\"OrderItemsToOrders\",\"relationFromFields\":[\"Order_Items_Id\"],\"relationToFields\":[\"Order_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"OrderItemsToProduct\",\"relationFromFields\":[\"Product_Id\"],\"relationToFields\":[\"Product_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Orders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Order_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_Time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"8\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderItems\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"nativeType\":null,\"relationName\":\"OrderItemsToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[\"User_ID\"],\"relationToFields\":[\"User_ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shipping_Table\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shipping_Table\",\"nativeType\":null,\"relationName\":\"OrdersToShipping_Table\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Product_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"8\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_Quatity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_img_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"nativeType\":null,\"relationName\":\"OrderItemsToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Promo_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promo_items\",\"nativeType\":null,\"relationName\":\"ProductToPromo_items\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Promo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promo_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discount_Percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"8\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Start_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"End_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Promo_items\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promo_items\",\"nativeType\":null,\"relationName\":\"PromoToPromo_items\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Promo_items\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Promo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discounted\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Discounted\",\"nativeType\":null,\"relationName\":\"DiscountedToPromo_items\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"nativeType\":null,\"relationName\":\"ProductToPromo_items\",\"relationFromFields\":[\"Product_id\"],\"relationToFields\":[\"Product_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Promo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promo\",\"nativeType\":null,\"relationName\":\"PromoToPromo_items\",\"relationFromFields\":[\"Promo_id\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Shipping_Table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Shipping_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tracking_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"nativeType\":null,\"relationName\":\"OrdersToShipping_Table\",\"relationFromFields\":[\"Order_id\"],\"relationToFields\":[\"Order_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User_Notifications\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Notif_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"User_NotificationsToUsers\",\"relationFromFields\":[\"User_ID\"],\"relationToFields\":[\"User_ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"User_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_img_uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"City\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"State\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ZipCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Employee_s\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Employee_s\",\"nativeType\":null,\"relationName\":\"Employee_sToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"nativeType\":null,\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_Notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User_Notifications\",\"nativeType\":null,\"relationName\":\"User_NotificationsToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

