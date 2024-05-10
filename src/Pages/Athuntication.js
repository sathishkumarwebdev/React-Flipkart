export function Athuntication(){

    useEffect(() => {
      const token = localStorage.getItem("token");
      const getData = async () => {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("data ::", data);
        
      };

      if (token) {
        getData();
      }
      
    }, []);

}