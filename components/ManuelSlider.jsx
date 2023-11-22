"use client";
import { useState } from "react";
import Image from "next/image";
import leftArrow from "@/public/img/left-arrow.svg";
import rightArrow from "@/public/img/right-arrow.svg";
import styles from "@/app/page.module.css";
import sliderData from "@/data/SliderData.json";

export default function ManuelSlider() {
	const [index, setindex] = useState(1);                 // Déclaration de l'état 'index' avec une valeur initiale de 1.

	function toggleImage(indexPayload) {                   // La fonction 'toggleImage' ajuste la valeur de 'index'.
		let newState;                                      // la varible'newState' va me permettre ensuite de déterminer le nouvel état.
		if (index + indexPayload > sliderData.length) {    // si 'index' additionné à 'indexPayload' est supérieur à la longueur des données du slider.
			newState = 1;                                  // Alors on réinitialise 'newState' à 1 (retour au début).
		} else if (index + indexPayload < 1) {             // Si 'index' devient inférieur à 1
			newState = sliderData.length;                  //  on fixe 'newState' à la longueur du slider (va à la fin).
		} else {
			newState = index + indexPayload;               // Dans tous les autres cas, ajuste simplement 'index' avec 'indexPayload'.
		}
		setindex(newState);                                // Mise à jour de l'état 'index' avec 'newState'.
	}
	return (
		<>
			<p className={styles.sliderPosition}>
				{" "}
				{index} / {sliderData.length}
			</p>

			<div className={styles.sliderContainer}>
			{/* La méthode .find() recherche dans le tableau sliderData l'objet dont l'id correspond à la valeur actuelle de index 
			et renvoie le premier objet qui satisfait la condition spécifiée dans la fonction fléchée.*/}
				<p className={styles.sliderName}>{sliderData.find((obj) => obj.id === index).description}</p> 

				<Image src={`/img/img-${index}.jpg`} alt="" className={styles.sliderImg} width={600} height={400} priority />


                  {/* C'est une fonction fléchée qui lorsque le bouton est cliqué, elle appelle la fonction toggleImage avec l'argument -1, 
                      ce qui signifie que l'index du slider doit être décrémenté de 1 (naviguer vers l'image précédente). */}
				<button onClick={() => toggleImage(-1)} className={`${styles.arrowsContainer} ${styles.left}`}>
					<Image src={leftArrow} alt=" bouton retour" className={styles.arrow} />
				</button>
				<button onClick={() => toggleImage(+1)} className={`${styles.arrowsContainer} ${styles.right}`}>
					<Image src={rightArrow} alt=" bouton suivant" className={styles.arrow} />
				</button>
			</div>
		</>
	);
}
