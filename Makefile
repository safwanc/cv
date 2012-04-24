# LaTeX Engine Selection
texengine = pdflatex

all: cv cover

cover: cover.pdf
cv: cv.pdf

%.pdf: %.tex
	$(texengine) $<
	rm -f *.aux *.log *.out

clean:
	rm -f *.aux *.log *.out

purge:
	rm -f *.pdf *.aux *.log *.out *.gz *.fdb*