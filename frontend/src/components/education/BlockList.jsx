/* eslint-disable react/prop-types */
import NormalBlock from "./NormalBlock";

export default function BlockList({ education }) {
    
    return (
        <>
            <div className="xl:w-1/3 flex flex-col md:flex-row xl:flex-col gap-4 md:gap-2 " >
            {/* <NormalBlock edu ={education} index ={0} /> */}
            <NormalBlock edu ={education} index ={1} />
            <NormalBlock edu ={education} index ={2} />
            </div>
        </>
    )
}