const TlolCard = ({tlolInfo:{totalBlackCount,black}, hashtags})=>{
    return (
        <>
            트롤횟수:{totalBlackCount}
            <br/>
            {/* {black?"O":"X"} */}
            <br/>
            {hashtags}
        </>
        
    )
}
export default TlolCard