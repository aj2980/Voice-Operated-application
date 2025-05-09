import os
import io
import librosa
import torch
from flask import Flask, request, jsonify, send_from_directory
from transformers import Wav2Vec2ForSequenceClassification, Wav2Vec2Processor
from flask_cors import CORS

app = Flask(__name__, static_folder='views')
CORS(app)  # Enable CORS
# Load the model and processor
model_name = "facebook/wav2vec2-large-960h"
model = Wav2Vec2ForSequenceClassification.from_pretrained(model_name)
processor = Wav2Vec2Processor.from_pretrained(model_name)

def classify_audio_clip(clip):
    inputs = processor(clip, sampling_rate=16000, return_tensors="pt", padding=True)
    with torch.no_grad():
        logits = model(**inputs).logits
    probabilities = torch.nn.functional.softmax(logits, dim=-1)
    print("Probabilities:", probabilities)  # Debugging output
    probability = probabilities[0].max().item()  # Get max probability from the first instance
    print("Max Probability:", probability)  # Debugging output
    return probability

def load_audio(file_path):
    audio, sr = librosa.load(file_path, sr=16000)
    return audio

@app.route('/upload', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        print("No file part in the request")  # Debugging output
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        print("No selected file")  # Debugging output
        return jsonify({"error": "No selected file"}), 400
    
    # Ensure the uploads directory exists
    upload_folder = 'uploads'
    if not os.path.exists(upload_folder):
        os.makedirs(upload_folder)
        print(f"Created directory: {upload_folder}")
        
    file_path = os.path.join(upload_folder, file.filename)
    file.save(file_path)
    print(f"File saved to: {file_path}")

    audio_clip = load_audio(file_path)
    print("Audio shape:", audio_clip.shape)  # Debugging output
    result = classify_audio_clip(audio_clip)
    print(f"Classification result: {result}")  # Debugging output

    return jsonify({"result": result})

@app.route('/uploads/<path:filename>')
def serve_uploaded_file(filename):
    return send_from_directory('uploads', filename)

# @app.route('/')
# def serve_static_index():
#     return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(port=7000)
