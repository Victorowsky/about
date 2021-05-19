


const NavOption = ({onClick, children}) => {


	return (

		<div className="navOption" onClick={onClick}>
			{children}
		</div>
	);
};

export default NavOption;
