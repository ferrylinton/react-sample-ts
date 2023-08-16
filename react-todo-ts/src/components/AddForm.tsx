import React, { ChangeEvent, useState } from 'react';

type Props = {
  handleAdd: (task: string) => void;
}

export default function AddForm({ handleAdd }: Props) {

  const [task, setTask] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAdd(task);
    setTask('');
  };

  return (
    <form
      className='w-full mb-5 border rounded border-slate-400 p-1'
      onSubmit={handleSubmit}
      noValidate
      autoComplete='off' >
      <div className='relative flex w-full h-12 '>
        <input
          type="text"
          placeholder='task'
          name='task'
          value={task}
          onChange={handleChange}
          className="w-full px-5  pr-10 focus:outline-none" />
        <button type="submit" className="absolute uppercase top-0 right-0 h-full rounded px-6 text-slate-200 hover:text-white bg-blue-700 hover:bg-blue-800">
          Save
        </button>
      </div>
    </form>

  )
}