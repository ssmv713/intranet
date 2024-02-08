export type Schedule = {
  state: string;
  date: string;
  time: string;
};

export const getSchedules = async (id: string) => {
  const response = await fetch(`http://localhost:3001/schedules/${id}`).then(
    (res) => res.json()
  );
  return response;
};

export const addChart = async (
  id: string,
  state: string,
  date: string,
  time: string
) => {
  const schedule: Schedule = {
    state: state,
    date: date,
    time: time,
  };

  const beforeChart = await getSchedules(id); //목업서버 POST 요청의 한계
  const newSchedules = [...beforeChart.schedule, schedule];
  const response = await fetch("http://localhost:3001/schedules", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ id, schedule: newSchedules }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add schedule. Status: ${response.status}`);
  }
};
