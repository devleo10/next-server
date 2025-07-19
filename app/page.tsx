import axios from 'axios';

async function getUserData(){
   const response = await axios.post("http://localhost:3000/api/user",{})
   return response.data;
}

export default async function Home(){
  const userDetails =  await getUserData();

  return(
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex justify-center items-center">
      <div className='border p-8 rounded'>
        <div>
        Name: {userDetails?.name}
        </div>
        Email: {userDetails?.email}
      </div>
      </div>
    </div>

  )
}
