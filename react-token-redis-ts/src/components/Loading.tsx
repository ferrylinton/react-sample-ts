import { Dispatch, SetStateAction } from "react";

type Props = {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

export default function Loading({ loading, setLoading }: Props) {

    if (loading)
        return (<>
            <div className="z-[53] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="bg-gray-500 opacity-70 p-1 rounded-full shadow-lg shadow-gray-900/50 border border-gray-600">
                    <div style={{ "borderTopColor": "transparent" }}
                        className="w-12 h-12 border-4 border-gray-50 border-dashed rounded-full animate-spin"></div>
                </div>
            </div>
            <div onClick={() => setLoading(false)} className='bg-gray-200 opacity-70 fixed inset-0 z-[52]' />
        </>);
    else
        return null

}