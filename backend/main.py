from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins; change this for security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)  # Ensure the upload directory exists

@app.post("/upload-folder")
async def upload_folder(files: list[UploadFile] = File(...)):
    for file in files:
        file_path = UPLOAD_DIR / file.filename  # Preserve folder structure
        file_path.parent.mkdir(parents=True, exist_ok=True)  # Create directories
        with file_path.open("wb") as f:
            f.write(await file.read())

    return {"message": "Folder uploaded successfully"}
