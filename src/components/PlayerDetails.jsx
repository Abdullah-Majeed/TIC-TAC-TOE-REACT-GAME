import { useState } from "react";

export default function PlayerDetails({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    const handlePlayerNameChange = (e) => {
        setPlayerName(e.target.value);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handlePlayerNameChange} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}