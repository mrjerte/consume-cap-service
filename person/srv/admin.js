
const cds = require('@sap/cds')
const { retrieveJwt } = require('@sap/cloud-sdk-core')

module.exports = srv => {

    const controllerAPI = cds.connect.to('test-lite')
	srv.on('READ', 'Location', async ( req) => {

		let element = {}
		let response

		let location = []
		try{
			var jwt = retrieveJwt(req._.req)
			console.log("JWT: " + jwt)
			req.attr.token = jwt
			const tx = controllerAPI.transaction(req)
			response = await tx.get('/app/Location')

			response.respose.forEach(function(item){
				console.log(item)
				location.push({id: item.id, country: item.country})
			})
			
			req.reply(response);
			return response;

		} catch (e) {

			/*var element = {}, respose = [];
			element.id = 1;
			element.country = "PERUS";
			respose.push(element);
			console.log("Error: ","Locations")
            */

			//console.log("Error: " + e.message)
			//console.log("Stack: " + e.stack)
		}


	})

}
