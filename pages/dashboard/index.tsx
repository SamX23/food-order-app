import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const DashboardPage = () => {
  const [data, setData] = useState<number>(100);
  const getData = useCallback(async () => {}, []);

  useEffect(() => {
    console.log({ data });
    getData();
  }, [data, getData]);

  const Total = useMemo(() => data * 100, []);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    console.log({ form: formRef });
    formRef.current?.submit();
  };

  return (
    <div>
      DashboardPage
      <hr />
      <h1>{data}</h1>
      <h2>{Total}</h2>
      <hr />
      <button
        //   onClick={() => setData((prev) => prev + 1)}
        onClick={onSubmit}
      >
        ADD
      </button>
      <form ref={formRef}>
        <input type="date" name="dates" id="dates" />
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        <div>TOTAL USER</div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div>TOTAL TRANSACTION</div>
      </Suspense>
    </div>
  );
};

export default DashboardPage;
