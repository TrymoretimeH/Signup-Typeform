import './FormAction.css'

export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm rounded-md text-white button-create-custom"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}