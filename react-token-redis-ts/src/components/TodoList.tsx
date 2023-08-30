import { useIntl } from 'react-intl';
import TodoItem from './TodoItem'

type Props = {
    todoes: Todo[] | null,
    handleUpdate: (id: string) => void,
    handleDelete: (id: string) => void
}

export default function TodoList({ todoes, handleUpdate, handleDelete }: Props) {

    const intl = useIntl();

    if (todoes && todoes.length > 0) {
        return (
            <div className='w-full'>
                {
                    todoes.map((todo, _index) => {
                        return <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete} />
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="w-full border text-center border-slate-400 px-4 py-3 rounded relative mb-4 pr-4">
                {intl.formatMessage({id : 'empty.data'})}
            </div>
        )
    }

}