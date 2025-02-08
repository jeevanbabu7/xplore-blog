import { useState } from "react";
import { Button } from "./styles/button";
import { Input } from "./styles/input";
import { Textarea } from "./styles/textarea";
import { Upload, AlertCircle, FileText, MessageSquare } from "lucide-react";
import { createClient } from '@supabase/supabase-js';

export default function EnhancedFormUI() {
  const [formType, setFormType] = useState("post");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBlogSubmit = async () => {
    const imgUrl = await uploadImage(image);
    try {
      setLoading(true);
      const response = await fetch("https://xplore-blog-s02u.onrender.com/api/blog/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image: imgUrl,
        }),
      })

      const data = await response.json();
      console.log(data);
      setLoading(false);
    }catch(err) {
      console.log(err);
      
    }
    
  }

  const handleMessageSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://xplore-blog-s02u.onrender.com/api/news/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
        }),
      });
      
      const data = await response.json();
      setLoading(false);
      console.log(data);
      
    }catch(err) {
      console.log(err);
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formType === "post") {
      handleBlogSubmit();
    }else {
      handleMessageSubmit();
    }
  };
  


// Initialize Supabase
  const supabaseUrl = "https://qjwuustulpznqpjxygws.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Upload function
  async function uploadImage(image) {
      const { data, error } = await supabase.storage
          .from('images') // Replace with your bucket name
          .upload(`uploads/${image.name}`, image, {
              cacheControl: '3600',
              upsert: true
          });

      if (error) {
          console.error('Upload error:', error);
          return null;
      }

      // Get Public URL
      const { data: publicUrl } = supabase
          .storage
          .from('images')
          .getPublicUrl(`uploads/${image.name}`);

      console.log("Image URL:", publicUrl.publicUrl);
      return publicUrl.publicUrl;
  }



  const toggleFormType = () => {
    setFormType(formType === "post" ? "message" : "post");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl sm:max-w-xl md:max-w-2xl">
        <div className="bg-black bg-opacity-60 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-500/20">
          <div className="flex justify-center mb-6">
            <Button onClick={toggleFormType} className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              {formType === "post" ? (
                <>
                  <MessageSquare className="mr-2" size={18} /> Switch to New Message
                </>
              ) : (
                <>
                  <FileText className="mr-2" size={18} /> Switch to New Post
                </>
              )}
            </Button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6 sm:mb-8 text-center">
            {formType === "post" ? "Create New Post" : "Send New Message"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {formType === "post" ? (
              <>
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-orange-400 text-sm font-medium mb-1">Title</label>
                  <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-gray-800/50 text-white border-orange-500/50 focus:ring-orange-500 focus:border-orange-500 rounded-lg transition-all duration-300 ease-in-out focus:scale-[1.02]" placeholder="Enter your title" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="content" className="block text-orange-400 text-sm font-medium mb-1">Content</label>
                  <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full bg-gray-800/50 text-white border-orange-500/50 focus:ring-orange-500 focus:border-orange-500 rounded-lg transition-all duration-300 ease-in-out focus:scale-[1.02]" placeholder="Enter your content" rows={4} sm:rows={6} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="image" className="block text-orange-400 text-sm font-medium mb-1">Upload Image</label>
                  <div className="relative">
                    <Input id="image" type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className="w-full bg-gray-800/50 text-white border-orange-500/50 focus:ring-orange-500 focus:border-orange-500 rounded-lg file:bg-orange-500 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-2 file:mr-4 file:hover:bg-orange-600 file:cursor-pointer transition-all duration-300 ease-in-out focus:scale-[1.02]" accept="image/*" />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none" size={20} />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <label htmlFor="message" className="block text-orange-400 text-sm font-medium mb-1">Message</label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-800/50 text-white border-orange-500/50 focus:ring-orange-500 focus:border-orange-500 rounded-lg transition-all duration-300 ease-in-out focus:scale-[1.02]" placeholder="Enter your message" rows={6} sm:rows={8} />
              </div>
            )}

            {!loading ? (
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              {formType === "post" ? "Submit Post" : "Send Message"}
            </Button>
            ):
            (
              <Button disabled className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-lg cursor-not-allowed transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Submitting...
            </Button>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-orange-300 text-sm flex items-center justify-center">
              <AlertCircle size={16} className="mr-2" /> All fields are required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
