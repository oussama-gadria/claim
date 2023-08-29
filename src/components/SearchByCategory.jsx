const SearchByCategory=()=>{ 
    return ( 
        <> 
          <div className="container mx-auto">
            <div className="flex flex-row items-center pt-9 pb-4">
                <p className="font-normal text-blue text-[40px]">
                    Search By
                </p>
                <p className="pl-1 font-medium  text-[40px]">
                    Category
                </p>
            </div>
            <div className="flex flex-row  justify-around">
                <div className="flex  flex-col basis-1/6 items-center bg-white rounded overflow-hidden shadow-lg mr-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPwTvtAuzXQIL7tdjkRKAigdajgPPHXrmlcHAadAvARp4GNaRM-M5eNN8EBlvm2y_DFo&usqp=CAU' />
                    </div>
                    <a  href="/#" className="text-sm mt-6 mb-2 font-bold">BONSAI</a>
                </div>
                <div className="flex  flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPwTvtAuzXQIL7tdjkRKAigdajgPPHXrmlcHAadAvARp4GNaRM-M5eNN8EBlvm2y_DFo&usqp=CAU' />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">CACTI</a>
                </div>
                <div className="flex flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPwTvtAuzXQIL7tdjkRKAigdajgPPHXrmlcHAadAvARp4GNaRM-M5eNN8EBlvm2y_DFo&usqp=CAU' />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">CREEPERS</a>
                </div>
               
            </div>
        </div>
        </>
    )
}
export default SearchByCategory;