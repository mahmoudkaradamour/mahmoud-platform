import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/**
 * Post Purchase Request Screen.
 * Part of the Sovereign On-Demand System.
 * Users post what they need and merchants bid.
 */
class PostRequestScreen extends StatefulWidget {
  const PostRequestScreen({super.key});

  @override
  State<PostRequestScreen> createState() => _PostRequestScreenState();
}

class _PostRequestScreenState extends State<PostRequestScreen> {
  final _titleController = TextEditingController();
  final _descController = TextEditingController();
  final _budgetController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("نشر طلب شراء"),
        leading: IconButton(
          icon: const Icon(Icons.close),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSectionHeader("ما الذي تبحث عنه؟", "صف بدقة المنتج الذي تحتاجه للحصول على أفضل العروض"),
            SizedBox(height: 30.h),
            
            _buildInputLabel("عنوان الطلب"),
            _buildTextField(_titleController, "مثلاً: آيفون 15 برو ماكس تيتانيوم"),
            
            SizedBox(height: 20.h),
            _buildInputLabel("المواصفات المطلوبة"),
            _buildTextField(_descController, "اكتب التفاصيل هنا (اللون، السعة، الضمان...)", maxLines: 5),
            
            SizedBox(height: 20.h),
            _buildInputLabel("الميزانية المتوقعة (اختياري)"),
            _buildTextField(_budgetController, "0.00", icon: Icons.attach_money, isNumeric: true),
            
            SizedBox(height: 40.h),
            Container(
              padding: EdgeInsets.all(20.w),
              decoration: BoxDecoration(
                color: AppTheme.primary.withOpacity(0.05),
                borderRadius: BorderRadius.circular(24.r),
                border: Border.all(color: AppTheme.primary.withOpacity(0.1)),
              ),
              child: Row(
                children: [
                  const Icon(Icons.gavel_rounded, color: AppTheme.primary),
                  SizedBox(width: 15.w),
                  Expanded(
                    child: Text(
                      "سيتم عرض طلبك على جميع التجار الموثقين وسوف تتلقى عروض أسعار تنافسية فوراً.",
                      style: TextStyle(fontSize: 12.sp, color: Colors.black54, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 40.h),
            
            ElevatedButton(
              onPressed: () {
                // Submit logic to Bidding Module
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.primary,
                foregroundColor: Colors.white,
                minimumSize: Size(double.infinity, 65.h),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.r)),
              ),
              child: const Text("نشر الطلب الآن", style: TextStyle(fontWeight: FontWeight.black, fontSize: 18)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title, String subtitle) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: TextStyle(fontSize: 24.sp, fontWeight: FontWeight.black, color: Colors.black)),
        SizedBox(height: 4.h),
        Text(subtitle, style: TextStyle(fontSize: 14.sp, color: Colors.black45, fontWeight: FontWeight.bold)),
      ],
    );
  }

  Widget _buildInputLabel(String label) {
    return Padding(
      padding: EdgeInsets.only(bottom: 8.h, right: 4.w),
      child: Text(label, style: const TextStyle(fontWeight: FontWeight.black, fontSize: 14)),
    );
  }

  Widget _buildTextField(TextEditingController controller, String hint, {int maxLines = 1, IconData? icon, bool isNumeric = false}) {
    return TextField(
      controller: controller,
      maxLines: maxLines,
      keyboardType: isNumeric ? TextInputType.number : TextInputType.text,
      decoration: InputDecoration(
        hintText: hint,
        prefixIcon: icon != null ? Icon(icon, color: AppTheme.primary) : null,
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(20.r), borderSide: const BorderSide(color: Colors.black12)),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(20.r), borderSide: const BorderSide(color: Colors.black12)),
      ),
    );
  }
}
