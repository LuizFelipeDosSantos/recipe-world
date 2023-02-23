import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {

    const [ searchName, setSearchName ] = useState("");
    const navigate = useNavigate();

    const onSearchChangeHandler = (event) => {
        setSearchName(event.target.value);
    };

    const onSearchHandler = () => {
        navigate("/search", { state: searchName});
        setSearchName("");
    };

    return (
        <div>
            <input
                id="search"
                type="text"
                value={searchName}
                onChange={onSearchChangeHandler}
                placeholder="Search recipes"
            />
            {searchName.length > 0 && (
                <button
                    onClick={onSearchHandler}
                    type="button"
                    id="search-button"                    
                    >
                    Seach
                </button>
            )}
        </div>
    )
}