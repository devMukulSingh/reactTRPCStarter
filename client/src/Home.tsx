import { trpc } from "../lib/trpc";
import Cookies from "js-cookie"

const Home = () => {
    Cookies.set('token',`111`,{
        sameSite:'none',
        secure:true,

    })
  const  { mutate } = trpc.authRouter.createUser.useMutation({
    onSuccess(){
        refetch()
    },
    onError(e) {
      alert(e.message);
      console.log(e);
    },
  });
  const { data:userData,refetch } = trpc.userRouter.userList.useQuery();
  console.log(userData);
  return (
    <>
      <h1>Vite + React</h1>
      <button
        onClick={() => {
          mutate({
            email: "m@gmail.com",
            name: "mili",
            password: `1111`,
          });
          
        }}
      >
        createUser
      </button>
    </>
  );
};

export default Home;
// const client = createTRPCClient<AppRouter>({
//   links: [
//     httpBatchLink({
//       url: "http://localhost:8000/trpc",
//       headers: {
//         Authorization: "token",
//       },
//     }),
//   ],
// });
// async function createUser() {
//   const cl = await client.authRouter.createUser.mutate({
//     name: "Mukkul",
//     email: "m@gmail.com",
//     password: "1234",
//   });
//   console.log(cl);
//   // setUserData()
// }
// useEffect(() => {
//   async function getUsers() {
//     const user = await client.userRouter.userList.query();
//     setUserData(user);
//   }
//   getUsers();
// }, []);
// console.log(userData);
