import javax.inject.Named;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Named
@Path("/")
public class RestAPIs {
	/**
	* Description: 
	* Req: get
	* Params:
	* Return:
	**/	@get
	@Path("test")
	@Produces(MediaType.APPLICATION_JSON)
	public Response test() {
		return Response.status(200).build();
	}
	/**
	* Description: 
	* Req: post
	* Params:
	* Return:
	**/	@post
	@Path("lol")
	@Produces(MediaType.APPLICATION_JSON)
	public Response lol() {
		return Response.status(200).build();
	}
}