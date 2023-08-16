import clsx from "clsx";
import { FormattedMessage } from "react-intl";

type Props = {
    todo: Todo,
    handleUpdate: (id: string) => void,
    handleDelete: (id: string) => void
}

export default function TodoItem({ todo, handleUpdate, handleDelete }: Props) {
    return (
        <div className="w-full flex items-center justify-between border border-slate-300 p-2 mb-1 rounded hover:bg-slate-100">
            <div className={clsx('uppercase', { 'line-through': todo.done })}>{todo.task}</div>
            <div className="flex gap-1">
                {!todo.done &&
                    <button
                        onClick={() => handleUpdate(todo._id)}
                        className="border border-slate-400 hover:text-green-800 hover:bg-green-100 text-xs py-1 px-3 rounded uppercase">
                        <FormattedMessage id="btn.done" defaultMessage={'Done'} />
                    </button>}
                <button
                    onClick={() => handleDelete(todo._id)}
                    className="border border-slate-400 hover:text-red-800 hover:bg-red-100 text-xs py-1 px-3 rounded uppercase">
                    <FormattedMessage id="btn.delete" defaultMessage={'Delete'} />
                </button>
            </div>
        </div>
    )
}