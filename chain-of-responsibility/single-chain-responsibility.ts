interface DocumentHandler {
    setNext(documentHandler: DocumentHandler): DocumentHandler;
    process(document: string): string;
}

class PDFDocumentHandler implements DocumentHandler {
    private nextHandler: DocumentHandler | undefined;

    setNext(handler: DocumentHandler): DocumentHandler {
        this.nextHandler = handler;
        return handler;
    }

    process(document: string): string {
        if (document === "PDF") {
            console.log("PDF Document Handler Procesing");
            return document;
        } else if (this.nextHandler) {
            return this.nextHandler.process(document)
        } else {
            return "Not able to process this document";
        }
    }
}

class TextDocumentHandler implements DocumentHandler {
    private nextHandler: DocumentHandler | undefined;

    setNext(documentHandler: DocumentHandler): DocumentHandler {
        this.nextHandler = documentHandler;
        return documentHandler;
    }

    process(document: string): string {
        if (document === "TEXT") {
            console.log("Text Document Handler processing");
            return document;
        } else if (this.nextHandler) {
            return this.nextHandler.process(document);
        } else {
            return "Not able to process this document";
        }
    }
}

class WordDocumentHandler implements DocumentHandler {
    private nextHandler: DocumentHandler | undefined;


    setNext(documentHandler: DocumentHandler): DocumentHandler {
        this.nextHandler = documentHandler;
        return documentHandler;
    }

    process(document: string): string {
        if (document === "WORD") {
            console.log("Word Document Handler processing");
            return document;
        } else if (this.nextHandler) {
            return this.nextHandler.process(document);
        } else {
            return "Not able to process this document";
        }
    }

}

const textDocumentHandler = new TextDocumentHandler();
const pdfDocumentHandler = new PDFDocumentHandler();
const wordDocumentHandler = new WordDocumentHandler();

pdfDocumentHandler.setNext(textDocumentHandler).setNext(wordDocumentHandler);
console.log(pdfDocumentHandler.process("WORD"));