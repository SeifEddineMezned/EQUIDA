from unsloth import FastLanguageModel
import torch

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "./equida-finance-model", 
    max_seq_length = 2048,
    dtype = None,
    load_in_4bit = True,
)
FastLanguageModel.for_inference(model)

def ask_equida_model(system_prompt: str, user_prompt: str) -> str:
    if model is None or tokenizer is None:
        return '{"error": "Inference engine offline."}'

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]
    
    inputs = tokenizer.apply_chat_template(
        messages, tokenize=True, add_generation_prompt=True, return_tensors="pt"
    ).to("cuda")
    
    # Generate tokens
    outputs = model.generate(inputs, max_new_tokens=1024, use_cache=True, temperature=0.1)
    
    # CRITICAL FIX: Slice the output tensor to remove the input prompt tokens
    generated_tokens = outputs[0][inputs.shape[1]:]
    
    # Decode only the newly generated tokens
    response = tokenizer.decode(generated_tokens, skip_special_tokens=True)
    return response.strip()
