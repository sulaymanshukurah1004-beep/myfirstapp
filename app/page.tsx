
type Course = {
  code: string;
  title: string;
  lecturer: string;
  color: string;
};

const courses: Course[] = [
  {
    code: "CSC 201",
    title: "Introduction to Programming",
    lecturer: "Department of Computer Science",
    color: "bg-blue-100 text-blue-700",
  },
  {
    code: "CSC 203",
    title: "Data Structures",
    lecturer: "Department of Computer Science",
    color: "bg-purple-100 text-purple-700",
  },
  {
    code: "GST 201",
    title: "Communication in English",
    lecturer: "General Studies",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    code: "MTH 201",
    title: "Mathematical Methods",
    lecturer: "Department of Mathematics",
    color: "bg-amber-100 text-amber-700",
  },
];

const stats = [
  {
    label: "Total assignments",
    value: 8,
    icon: "📚",
    color: "bg-blue-50",
  },
  {
    label: "Pending assignments",
    value: 3,
    icon: "⏳",
    color: "bg-amber-50",
  },
  {
    label: "Completed assignments",
    value: 5,
    icon: "✅",
    color: "bg-emerald-50",
  },
  {
    label: "Registered courses",
    value: courses.length,
    icon: "🎓",
    color: "bg-purple-50",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Student Portal
            </h1>
            <p className="text-sm text-slate-500">
              Your academic dashboard
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:block">
              Student Account
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-8">
        {/* Student profile */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Student Profile
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl">
              👩🏽‍🎓
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Your Name
              </h2>
              <p className="mt-2 text-slate-600">
                Matric Number: 2025/0001
              </p>
              <p className="mt-1 text-slate-600">
                Department: Computer Science
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 sm:ml-auto">
              ● Student
            </span>
          </div>
        </section>

        {/* Overview cards */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold">
              Academic Overview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              A quick look at your academic activities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${stat.color}`}
                >
                  {stat.icon}
                </div>

                <p className="text-sm text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Course list */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6">
            <h2 className="text-xl font-bold">My Courses</h2>
            <p className="mt-1 text-sm text-slate-500">
              Your registered courses for this semester.
            </p>
          </div>

          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.code}
                className="flex items-center gap-4 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${course.color}`}
                >
                  {course.code.split(" ")[0]}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{course.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {course.code} · {course.lecturer}
                  </p>
                </div>

                <span className="text-slate-400">›</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="pb-4 text-center text-sm text-slate-400">
          Student Portal · Your learning, organized.
        </footer>
      </div>
    </main>
  );
}
