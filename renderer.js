
var updateButon = document.getElementById("updateDatabase").addEventListener("click", async () => {
    //On récupère tout les servants grâce a l'API d'Atlas Academy
    /**const getServantFromAtlasAPI = await fetch("https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json");
    const servantJson = await getServantFromAtlasAPI.json();
    
    Object.keys(servantJson).forEach(key => {
        window.database.getServantOfId(servantJson[key].collectionNo, function(res){
            if(!res){
                window.database.addServantToDatabase(servantJson[key].collectionNo, servantJson[key].name.replace('\"Evil-wind\"', "Evil-wind").replace('\"First Hassan\"', "First Hassan").replace('\"Black Kite\"', "Black Kite"), servantJson[key].className, servantJson[key].rarity, servantJson[key].id);
            }
        });
    });

    const getCraftEssenceFromAtlasAPI = await fetch("https://api.atlasacademy.io/export/JP/nice_equip_lang_en.json");
    const craftEssenceJson = await getCraftEssenceFromAtlasAPI.json();

    Object.keys(craftEssenceJson).forEach(key => {
        window.database.getCraftEssenceOfId(craftEssenceJson[key].collectionNo, function(res){
            if(!res){
                if(craftEssenceJson[key].bondEquipOwner){
                    //console.log(craftEssenceJson[key].bondEquipOwner);
                    window.database.getServantOfAtlasId(craftEssenceJson[key].bondEquipOwner, function(res){
                        window.database.addCraftEssence(craftEssenceJson[key].collectionNo, craftEssenceJson[key].name, craftEssenceJson[key].rarity, craftEssenceJson[key].flag, res.servant_id);
                    });
                }else if(craftEssenceJson[key].valentineEquipOwner){
                    window.database.getServantOfAtlasId(craftEssenceJson[key].valentineEquipOwner, function(res){
                        window.database.addCraftEssence(craftEssenceJson[key].collectionNo, craftEssenceJson[key].name.replace("\"Love\"", "Love"), craftEssenceJson[key].rarity, craftEssenceJson[key].flag, res.servant_id);
                    });
                }else{
                    window.database.addCraftEssence(craftEssenceJson[key].collectionNo, craftEssenceJson[key].name.replace("\"Black Kite\"", "Black Kite").replace("\"Black Helmet\"", "Black Helmet").replace('\"Evil-wind\"', "Evil-wind"), craftEssenceJson[key].rarity, craftEssenceJson[key].flag, null);
                }
            }
        });
    });

    const getMaterialFromAtlasAPI = await fetch("https://api.atlasacademy.io/export/JP/nice_item_lang_en.json");
    const materialJson = await getMaterialFromAtlasAPI.json();

    Object.keys(materialJson).forEach(key => {
        window.database.getMaterialOfId(materialJson[key].id, function(res){
            if(!res){
                console.log(materialJson[key].name);
                if(!materialJson[key].name.includes("Kiara Punisher"))
                    window.database.addMaterial(materialJson[key].id, materialJson[key].name.replace("\"Melt's Death Whip\"", "Melt's Death Whip"), materialJson[key].type, 0, materialJson[key].id);
            }
        });
    });*/

    const messageBox = document.createElement('div');
    const textMessageBox = document.createElement('span');
    messageBox.classList.add('bg-cyan-500', 'mx-80', 'rounded-lg', 'py-3', 'shadow-lg', 'shadow-pink-600', 'transition', 'transition-opacity');
    textMessageBox.classList.add('uppercase', 'font-bold', 'text-white');
    textMessageBox.textContent = "Mise a jour de la base de donnée effectuée";
    messageBox.setAttribute('align', 'center');
    messageBox.setAttribute('id', 'message-box');
    const box = document.getElementById('messageBox');
    messageBox.appendChild(textMessageBox);
    //$('#messageBox').show(100, 'Scale');
    box.appendChild(messageBox);

    setTimeout(() => {
        const box = document.getElementById('message-box');
        box.style.display = 'none';
    }, 2000);

});