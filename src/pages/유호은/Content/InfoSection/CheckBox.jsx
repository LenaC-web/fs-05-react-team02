import { useState } from "react";

export function CheckBox({ children }) {
  // 체크박스의 상태를 관리할 useState 훅 사용
  const [isChecked, setIsChecked] = useState(false);

  // 체크박스를 클릭했을 때 상태 변경
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="content-row">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked} // 체크박스 상태
          onChange={handleCheckboxChange} // 체크박스 상태 변경 처리
        />
        {children}
      </label>
    </div>
  );
}
