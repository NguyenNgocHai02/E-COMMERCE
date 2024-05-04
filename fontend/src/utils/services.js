export const baseUrl="http://localhost:5000/api";
export const postRequest= async(url,body)=>{
    
   const response= await fetch(url,{
        method:"POST",
        headers:
        {"Content-Type":"application/json"
    },body
    })
  
    const data=await response.json();

    if(!response.ok)
    {
        let message;
        
            if(data?.message)
            {
                message=data.message;
            }
            else{
                message=data;
            }
        
        return{
            error:true,message
        }
    }console.log(data)
    return data;
}
export const getRequest = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (!response.ok) {
            let message;
            if (data?.message) {
                message = data.message;
            } else {
                message = data;
            }
            return {
                error: true,
                message
            };
        }
        return data;
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};
export const delRequest = async (url) => {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (!response.ok) {
            let message;
            if (data?.message) {
                message = data.message;
            } else {
                message = data;
            }
            return {
                error: true,
                message
            };
        }
        return data;
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};