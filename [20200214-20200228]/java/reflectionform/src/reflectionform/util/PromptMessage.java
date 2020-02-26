package reflectionform.util;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)
@Target(METHOD)
public @interface PromptMessage {
	// un attribut d'une annotation est forc�ment publique
	// la syntaxe est particuli�re, cela ressemble � une m�thode
	// attention, vous n'avez acces qu'aux types basique (valeur ou string) et enumeration 
	// ou au tableau de ceux-ci
	String message() default "saisissez svp";
	int order() default 0;

}
