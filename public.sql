/*
 Navicat Premium Data Transfer

 Source Server         : pg_local
 Source Server Type    : PostgreSQL
 Source Server Version : 130002
 Source Host           : localhost:5432
 Source Catalog        : edi_pelindo
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130002
 File Encoding         : 65001

 Date: 22/06/2022 21:34:21
*/


-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_user";
CREATE TABLE "public"."tbl_user" (
  "userid" int4 NOT NULL,
  "namalengkap" varchar(255) COLLATE "pg_catalog"."default",
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "status" char(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Primary Key structure for table tbl_user
-- ----------------------------
ALTER TABLE "public"."tbl_user" ADD CONSTRAINT "tbl_user_pkey" PRIMARY KEY ("userid");
