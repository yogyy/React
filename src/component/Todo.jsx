import { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

export default function Todo() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');

    const initialValue = JSON.parse(saved);

    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(e) {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  }
  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updateTask);
  }
  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }
  return (
    <Card>
      <Card.Title>Todo</Card.Title>
      <Card.Body>
        <form>
          <div className='flex items-center gap-x-2'>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button
              className='bg-slate-900'
              onClick={handleAddTask}
              text='Add task'
            />
          </div>
        </form>
        {tasks.length > 0 ? (
          <ol className='space-y-2 mt-4'>
            {tasks.map((task) => (
              <li key={task.id} className='flex justify-between items-center'>
                <span className='text-xl'>{task.name}</span>
                <div className='flex items-center gap-x-2'>
                  <p>{task.completed ? '✔' : '❌'}</p>
                  <button
                    onClick={() => handleCompleteTask(task.id)}
                    className='px-2 py-1 border text-sm text-white rounded-md bg-slate-900 border-none h-8'
                  >
                    Mark as {task.completed ? 'Complete' : 'Incomplete'}
                  </button>
                  <button
                    onClick={() => handleRemoveTask(task.id)}
                    className='px-2 py-1 border text-sm text-white rounded-md bg-slate-900 border-none h-8'
                  >
                    remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>You Have {tasks.length} tasks.</Card.Footer>
    </Card>
  );
}
