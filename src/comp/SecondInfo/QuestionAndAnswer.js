import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const QuestionAndAnswer = ({ question, answer }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		console.log(ref.current, inView);
	}, [inView, ref]);

	const styles = inView
		? {
				opacity: 1,
				transform: "translateX(0)",
		  }
		: {};

	return (
		<div className="questionAndAnswer" ref={ref} style={styles}>
			<div className="question">{question}</div>
			<div className="answer">{answer}</div>
		</div>
	);
};

export default QuestionAndAnswer;
