import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Intro from "./components/Intro";
import TodoPanel from "./components/TodoPanel";
import { useTasks } from "./hooks/useTasks.hook";

const App = () => {
  const {
    tasks,
    filter,
    input,
    remaining,
    visibleTasks,
    setFilter,
    setInput,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTasks();

  const completedCount = tasks.length - remaining;
  const hasCompletedTasks = completedCount > 0;

  return (
    <div className="min-h-screen min-w-[320px] overflow-hidden bg-[radial-gradient(ellipse_at_51%_23%,#fffdf8_0%,#f8f7f4_53%)] text-[#302f2b] font-['DM_Sans','Segoe_UI',sans-serif]">
      <AppHeader />

      <main
        id="home"
        className="mx-auto w-[min(100%_-_30px,620px)] flex-1 py-[59px] sm:w-[min(100%_-_40px,620px)] sm:py-[78px] lg:py-[86px]"
      >
        <Intro />
        <TodoPanel
          tasks={tasks}
          filter={filter}
          input={input}
          remaining={remaining}
          visibleTasks={visibleTasks}
          hasCompletedTasks={hasCompletedTasks}
          completedCount={completedCount}
          onInputChange={setInput}
          onAddTask={addTask}
          onFilterChange={setFilter}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onClearCompleted={clearCompleted}
        />
        <p className="mt-[22px] text-center font-serif text-xs italic text-[#aaa69b]">
          Small steps still move you forward{" "}
          <span className="ml-[3px] not-italic text-[#c6ae78]">✳</span>
        </p>
      </main>

      <AppFooter />
    </div>
  );
};

export default App;
