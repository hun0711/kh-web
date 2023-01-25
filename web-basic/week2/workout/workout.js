let items = [
  { id: 1, name: "벤치프레스", count: 0 },
  { id: 2, name: "데드리프트", count: 0 },
  { id: 3, name: "덤벨 숄더 프레스", count: 0 },
];

/* CREATE */
const handleAdd = () => {
  const workouts = [
    ...items,
    { id: items.length + 1, name: undefined, count: 0 },
  ];
  console.log(workouts);
  console.log(items);
};

/* DELETE */
const handleDelete = (id) => {
  const workouts = items.filter((item) => item.id != id);
  console.log(workouts);
  items = [...workouts];
};

handleAdd();
// handleDelete(1 + 1 + 1);
