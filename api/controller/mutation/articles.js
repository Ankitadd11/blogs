
/*
  * Created By : Ankita Solace
  * Created Date : 26-09-2020
  * Purpose : Declare article mutations ,
*/

	let { _insert, _update } = require("./../db"),
	    { Tables } = require("./../../constants")

    // add article
  var addArticle = async(req,res,next)=>{
			try {
					let tabl = Tables.Articles,
							data = req.body,
							valuesObj = await getValueObject( data )

					let values = await getValueString( valuesObj ),
					    feilds =  await getFeilds( )

					await _insert( tabl, feilds, values, res, "ID" )
			} catch (e) {
				throw new Error( "addArticle catch block: ", e);
			}
  };


  //edit article
   var editArticle = async(req,res,next)=>{
		 	try {
				let tabl = Tables.Articles,
            data = req.body,
						valuesObj = await getValueObject( data ),
						values = await getEditValueString( valuesObj ),
						WhereCond = "ID = "+data.ID+" AND  Status = 1"
            await _update( tabl, values, WhereCond, res, "ID" )
		 	} catch (e) {
		 			throw new Error( "editArticle catch block: ", e);
		 	}
  };

  // delete article
     var deleteArticle = async(req,res,next)=>{
			 try {
				 let tabl = Tables.Articles,
						 data = req.body,
						values = "Status = 0",
						WhereCond = "ID = "+data.ID
				 await _update( tabl, values, WhereCond, res, "ID" )
			 } catch (e) {
				 throw new Error( "deleteArticle catch block: ", e);
			 }
  };


	// for insert create value object
    async function getValueObject( data ) {
         let   valuesObj = {
            Title : ( typeof data.Title != "undefined") ? data.Title : "",
            SubTitle : ( typeof data.SubTitle != "undefined") ? data.SubTitle : "",
            Description :  ( typeof data.Description != "undefined") ? data.Description : "",
            Slug :  ( typeof data.Slug != "undefined") ? data.Slug : "",
            AuthorID :  ( typeof data.AuthorID != "undefined") ? data.AuthorID : 0,
            FeatureImage :  ( typeof data.FeatureImage != "undefined") ? data.FeatureImage : "",
            isPublish :  ( typeof data.isPublish != "undefined") ? data.isPublish : false,
            Status :  ( typeof data.Status != "undefined") ? data.Status : 1,
            CreatedBy :  ( typeof data.AuthorID != "undefined") ? data.AuthorID : 0,
            ModifiedBy :  ( typeof data.AuthorID != "undefined") ? data.AuthorID : 0,
            CreatedDate : await DateMysql ( new Date() ),
            ModifedDate : await DateMysql( new Date() )
        }
        return await valuesObj
    }

		// for edit data create value object
    async function getEditValueString( valuesObj ) {
         return await "Title = '"+valuesObj.Title+"', SubTitle = '"+valuesObj.SubTitle+"', Description = '"+valuesObj.Description+"', Slug = '"+valuesObj.Slug+"', AuthorID = "+valuesObj.AuthorID+", FeatureImage = '"+valuesObj.FeatureImage+"', "+" isPublish = "+valuesObj.isPublish+", Status = "+valuesObj.Status+", ModifiedBy = "+valuesObj.ModifiedBy+", ModifedDate = '"+ await DateMysql( new Date() )+"'"
    }

		// get the tables fields for insert
  	async function getFeilds() {
  		return await "Title, SubTitle,Description,Slug,AuthorID,FeatureImage,isPublish,Status,CreatedBy,ModifiedBy,CreatedDate,ModifedDate"
  	}

	// for insert create value object into string
	async function  getValueString( valuesObj ) {
		return await "'"+valuesObj.Title +"', "+"'"+valuesObj.SubTitle +"', "+"'"+valuesObj.Description +"', "+"'"+valuesObj.Slug +"', "+""+valuesObj.AuthorID +", "+"'"+valuesObj.FeatureImage +"', "+""+valuesObj.isPublish +", "+""+valuesObj.Status +", "+""+valuesObj.CreatedBy +", "+valuesObj.ModifiedBy +", "+"'"+valuesObj.CreatedDate +"', "+"' "+valuesObj.ModifedDate +"'"
	}


	// convert date into myqsql format
   async function DateMysql( date ) {
       return await  date.getUTCFullYear() + '-' +
             ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
             ('00' + date.getUTCDate()).slice(-2) + ' ' +
             ('00' + date.getUTCHours()).slice(-2) + ':' +
             ('00' + date.getUTCMinutes()).slice(-2) + ':' +
             ('00' + date.getUTCSeconds()).slice(-2);
   }

module.exports = { addArticle , editArticle, deleteArticle };
