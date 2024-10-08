//  const GetPolink = () => {


//     // connect wallet function
//   async function getPolinkweb() {
//     if (walletAddress) {
//       return toast.error("Wallet is already connected");
//     }

//     const obj = setInterval(async () => {
//       if (window.pox) {
//         clearInterval(obj);
//         const detailsData = JSON.stringify(await window.pox.getDetails());
//         const parsedDetailsObject = JSON.parse(detailsData);
//         console.log(parsedDetailsObject);
//         // dispatch(setWalletAddress(parsedDetailsObject[1].data?.wallet_address));
//         // dispatch(setNetwork(parsedDetailsObject[1].data?.Network));
//       }
//     }, 1000);
//    }
//     return (
//         <div>

//         </div>
//     )
//  }

//  export default GetPolink;