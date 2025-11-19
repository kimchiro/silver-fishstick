"use client"

import { X, Minus, Maximize2, Send, Paperclip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface MailWindowProps {
  onClose: () => void;
}

export function MailWindow({ onClose }: MailWindowProps) {
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.from || !formData.subject || !formData.message) {
      toast.error("모든 필드를 입력해주세요.");
      return;
    }

    setIsSending(true);

    try {
      // EmailJS를 사용하여 실제 메일 전송
      // 참고: EmailJS 계정이 필요합니다 (https://www.emailjs.com/)
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID", // EmailJS 서비스 ID
          template_id: "YOUR_TEMPLATE_ID", // EmailJS 템플릿 ID
          user_id: "YOUR_PUBLIC_KEY", // EmailJS Public Key
          template_params: {
            to_email: "rlaehddhs12@gmail.com",
            from_email: formData.from,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        toast.success("메일이 성공적으로 전송되었습니다!");
        setFormData({ from: "", subject: "", message: "" });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        throw new Error("메일 전송 실패");
      }
    } catch (error) {
      // EmailJS가 설정되지 않은 경우 mailto: 링크 사용
      const mailtoLink = `mailto:rlaehddhs12@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `보내는 사람: ${formData.from}\n\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      toast.info("기본 메일 클라이언트가 열립니다.");
      
      setTimeout(() => {
        onClose();
      }, 1000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.5, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 100 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Title Bar */}
        <div className="bg-gradient-to-b from-gray-100 to-gray-50 border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group"
            >
              <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group"
            >
              <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            📧 새 메시지
          </div>
          <div className="w-16" />
        </div>

        {/* Mail Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* To Field (Read-only) */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b">
                <label className="text-gray-500 w-16">받는 사람:</label>
                <Input
                  type="email"
                  value="rlaehddhs12@gmail.com"
                  readOnly
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* From Field */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b">
                <label className="text-gray-500 w-16">보내는 사람:</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                  required
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b">
                <label className="text-gray-500 w-16">제목:</label>
                <Input
                  type="text"
                  placeholder="메일 제목을 입력하세요"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <Textarea
                placeholder="메시지를 입력하세요..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={12}
                className="resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-500"
              >
                <Paperclip className="w-4 h-4 mr-2" />
                첨부파일
              </Button>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSending}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  disabled={isSending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSending ? "전송 중..." : "전송"}
                </Button>
              </div>
            </div>
          </form>

          {/* Info Message */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
            💡 이 메일은 rlaehddhs12@gmail.com 으로 전송됩니다.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
