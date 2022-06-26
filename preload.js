/**const servantMgr = require("./models/servant_manager");
const ceMgr = require("./models/craft_essence_manager");
const materialMgr = require("./models/material_manager");
const { contextBridge } = require('electron');*/

/**
 * Sert a ajouter des servants dans la base de données
 */
const addServantToDatabase = (servant_id, servant_name, servant_class, servant_rarity, servant_atlas_id) => {
  servantMgr.insertServant(servant_id, servant_name, servant_class, servant_rarity, servant_atlas_id);
};

/**
 * Sert a récupèrer un servant dans la base de données
 */
const getServantOfId = (servant_id, callback) => {
  servantMgr.getServant(servant_id, callback);
};

/**
 * Sert a récupèrer un servant dans la base de données
 */
 const getServantOfAtlasId = (servant_id, callback) => {
  servantMgr.getServantByAtlasId(servant_id, callback);
};

const addCraftEssence = (ce_id, ce_name, ce_rarity, ce_type, servant_owner_id) => {
  ceMgr.insertCraftEssence(ce_id, ce_name, ce_rarity, ce_type, servant_owner_id);
}

const getCraftEssenceOfId = (ce_id, callback) => {
  ceMgr.getCraftEssenceOfId(ce_id, callback);
}

const addMaterial = (material_id, material_name, material_type, material_quantity, material_atlas_id) => {
  materialMgr.insertMaterial(material_id, material_name, material_type, material_quantity, material_atlas_id);
}

const getMaterialOfId = (material_id, callback) => {
  materialMgr.getMaterialOfId(material_id, callback);
}

contextBridge.exposeInMainWorld("database", {
  addServantToDatabase: addServantToDatabase,
  getServantOfId: getServantOfId,
  getServantOfAtlasId: getServantOfAtlasId,
  addCraftEssence: addCraftEssence,
  getCraftEssenceOfId: getCraftEssenceOfId,
  addMaterial: addMaterial,
  getMaterialOfId: getMaterialOfId,
});