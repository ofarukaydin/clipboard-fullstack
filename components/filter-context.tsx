import { createContext, ReactNode, useContext, useReducer } from "react";

type FilterContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

export type Ordering = "" | "asc" | "desc";
type SortType = "location" | "role" | "department" | "education" | "experience" | "";

export type Category = "jobType" | "department" | "workSchedule" | "experience";

type Action =
  | { type: "sortBy"; payload: SortType }
  | {
      type: "selectFilter";
      payload: { category: Category; type: string };
    }
  | { type: "search"; payload: string };

export type State = {
  searchValue: string;
  sortBy: SortType;
  direction: Ordering;
  filters: {
    jobType: string[];
    department: string[];
    workSchedule: string[];
    experience: string[];
  };
};

const defaultState: State = {
  searchValue: "",
  sortBy: "",
  direction: "",
  filters: {
    department: [],
    experience: [],
    jobType: [],
    workSchedule: [],
  },
};

const getOrdering = (direction: Ordering): Ordering => {
  if (direction === "asc") return "desc";
  else if (direction === "") return "asc";
  else if (direction === "desc") return "";
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "search":
      return { ...state, searchValue: action.payload };
    case "sortBy":
      return {
        ...state,
        sortBy: action.payload,
        direction: getOrdering(state.direction),
      };
    case "selectFilter":
      const index = state.filters[action.payload.category].indexOf(action.payload.type);
      if (index === -1) {
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.category]: [
              ...state.filters[action.payload.category],
              action.payload.type,
            ],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.category]: [
              ...state.filters[action.payload.category].slice(0, index),
              ...state.filters[action.payload.category].slice(index + 1),
            ],
          },
        };
      }

    default:
      throw new Error();
  }
};

const FilterContext = createContext<FilterContextType>({
  state: defaultState,
  dispatch: () => {},
});

export const useFilter = () => useContext(FilterContext);

export const FilterContextWrapper = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <FilterContext.Provider value={{ state: state as State, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
